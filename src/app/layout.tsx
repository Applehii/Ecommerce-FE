import type { Metadata } from "next";
// import "./globals.css";
import Menu from "@/components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";

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
        <div className="header">
          <Header />
        </div>
        <div className="">
        {children}
        </div>
      <footer className="footer"><Footer/> </footer>
      </body>
    </html>
  );
}
