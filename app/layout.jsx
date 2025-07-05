import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
// import PageTransition from "@/components/PageTransition";
// import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  // weight: "variable",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Mudeesha Tharindu Dilshan: Portfolio",
  description: "Portfolio of Mudeesha Tharindu Dilshan with projects, skills, and experience.",
  alternates: {
    canonical: "https://mudeesha-portfolio.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
          {children}
      </body>
    </html>
  );
}
