import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import { raleway } from "@/font";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ananya Bhatnagar Portfolio",
  description: "Ananya bhatnaga's personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} bg-gray-900 text-white antialiased `}
      ><Header/>
        {children}
      </body>
    </html>
  );
}
