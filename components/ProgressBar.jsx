// "use client";

// import { useEffect } from 'react';
// import { usePathname, useSearchParams } from 'next/navigation';
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';

// NProgress.configure({
//   showSpinner: false,
//   speed: 500,
//   trickleSpeed: 300,
// });

// let startTimeout;

// export default function ProgressBar() {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     // Clear any pending timeouts
//     if (startTimeout) {
//       clearTimeout(startTimeout);
//     }

//     // Start progress bar after a small delay
//     startTimeout = setTimeout(() => NProgress.start(), 100);

//     // Complete progress when route changes complete
//     return () => {
//       clearTimeout(startTimeout);
//       NProgress.done();
//     };
//   }, [pathname, searchParams]);

//   return null;
// }