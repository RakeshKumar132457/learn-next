import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Default Page",
    template: "%s | Template",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "aqua", padding: "10px" }}>
          Header
          <Link href={`/`}>Home</Link>
        </header>
        {children}
        <footer style={{ backgroundColor: "chartreuse", padding: "10px" }}>
          Footer
        </footer>
      </body>
    </html>
  );
}
