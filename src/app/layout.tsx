import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhinav Adarsh | AI / ML / Generative AI",
  description:
    "AI and Machine Learning portfolio of Abhinav Adarsh — building intelligent systems for real-world problems.",
  keywords: ["AI", "Machine Learning", "Generative AI", "Data Science", "Abhinav Adarsh"]
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}