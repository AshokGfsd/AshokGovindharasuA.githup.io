import "./globals.css";

export const metadata = {
  title: "ASHOK GOVINDHARASU A PORTFOLIO",
  description: "Full Stack Developer Portfolio - Ashok Govindharasu A",
  keywords: ["Ashok Govindharasu", "Full Stack Developer", "Portfolio", "React", "Next.js", "Node.js"],
  icons: {
    icon: "/vite.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
