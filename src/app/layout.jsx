import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Ashok Govindharasu A | Full Stack Developer",
  description: "Portfolio of Ashok Govindharasu A - Full Stack Developer crafting elegant, high-performance web applications with React, Next.js, and Node.js.",
  keywords: [
    "Ashok Govindharasu",
    "Full Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Node.js",
    "Web Developer",
    "Neumorphic Portfolio",
  ],
  icons: {
    icon: "/vite.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
