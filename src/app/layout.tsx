import type { Metadata } from "next";
// import "./globals.css";
import Menu from "@/components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Ecommerce web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          {" "}
          <Menu />
        </header>
        {children}
      </body>
    </html>
  );
}
