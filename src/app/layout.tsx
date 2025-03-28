import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/Footer/Footer";
import TopHeader from "@/components/TopHeader/TopHeader";

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
      <body className="bootstrap">
        <TopHeader />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
