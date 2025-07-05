"use client";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";

const Stats = () => {
  const [commitData, setCommitData] = useState({
    count: 0,
    repoCount: 0,
    lastUpdated: null,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/gh-commits');
        const data = await response.json();
        
        if (data.error) throw new Error(data.error);
        
        setCommitData({
          count: data.count,
          repoCount: data.repoCount,
          lastUpdated: data.lastUpdated,
          isLoading: false,
          error: null
        });
      } catch (error) {
        setCommitData(prev => ({
          ...prev,
          isLoading: false,
          error: error.message
        }));
      }
    };

    fetchData();
  }, []);

  const stats = [
    { num: 2, text: "Years of experience" },
    { num: 8, text: "Projects Completed" },
    { num: 7, text: "Technologies mastered" },
    {
        num: commitData.count,
        text: "Code commits" + (commitData.count ? ` across ${commitData.repoCount} repos` : ""),
        loading: !commitData.count
    },
  ];

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vm] mx-auto xl:max-w-none">
            {stats.map((item, index) => (
                <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                    {item.loading ? (
                        <div className="h-[48px] flex items-center">
                            <Spinner size="md"/>
                        </div>
                    ) : (
                    <CountUp
                        end={item.num}
                        duration={5}
                        delay={2}
                        className="text-4xl xl:text-6xl font-extrabold"
                    />
                    )}
                    <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                    {item.text}
                    </p>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;