import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Freshinn",
  description: "Freshinn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
