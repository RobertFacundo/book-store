import type { Metadata } from "next";
import { Inter, Italianno, Bellefair} from "next/font/google";
import "./globals.css";
import NavBar from "@/shared/components/navigation/NavBar";
import Footer from "@/shared/components/footer/Footer";

const italiano = Italianno({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const belleFair = Bellefair({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-custom",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Book Store",
  description: "Book store Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${italiano.variable} ${belleFair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="font-[family-name:var(--font-ui)] min-h-full">
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
