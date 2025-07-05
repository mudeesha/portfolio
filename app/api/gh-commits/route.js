export const dynamic = 'force-dynamic';

export async function GET() {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN; // Required for private repos

  if (!token) {
    return Response.json({
      error: "Faield when get commit count",
      count: 0
    }, { status: 400 });
  }

  try {
    // Get ALL repositories (including private and organization)
    let allRepos = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(
        `https://api.github.com/user/repos?page=${page}&per_page=100&affiliation=owner,collaborator,organization_member`,
        {
          headers: {
            Authorization: `token ${token}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        }
      );

      const repos = await response.json();
      allRepos = [...allRepos, ...repos];
      hasMore = repos.length === 100;
      page++;
    }

    // Process each repository for commits
    let totalCommits = 0;
    const commitPromises = allRepos.map(async (repo) => {
      try {
        // Get commit count for each repo
        const commitsResponse = await fetch(
          `https://api.github.com/repos/${repo.full_name}/commits?per_page=1`,
          {
            headers: {
              Authorization: `token ${token}`,
              'Accept': 'application/vnd.github.v3+json'
            }
          }
        );

        // Handle pagination
        const linkHeader = commitsResponse.headers.get('link');
        if (linkHeader) {
          const lastPageMatch = linkHeader.match(/page=(\d+)>; rel="last"/);
          if (lastPageMatch) {
            return parseInt(lastPageMatch[1]);
          }
        }

        // Fallback for small repos
        const commits = await commitsResponse.json();
        return commits.length > 0 ? 1 : 0;
      } catch (error) {
        console.error(`Error processing ${repo.full_name}:`, error);
        return 0;
      }
    });

    // Wait for all repositories to be processed
    const repoCounts = await Promise.all(commitPromises);
    totalCommits = repoCounts.reduce((sum, count) => sum + count, 0);

    return Response.json({ 
      count: totalCommits,
      repoCount: allRepos.length,
      lastUpdated: new Date().toISOString()
    });

  } catch (error) {
    console.error("GitHub API error:", error);
    return Response.json({ 
      error: "Failed to fetch commit count",
      count: 0
    }, { status: 500 });
  }
}