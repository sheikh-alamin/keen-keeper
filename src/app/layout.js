import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaChartBar, FaClock, FaFacebook, FaHome, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Link from "next/link";
import Home from "./page";
import Navbar from "./navbar/Navbar";
import FriendsPage from "./friends/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper App",
  description: "Developed by Alamin",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning={true}>
        <Navbar/>          
        {children}
        {/* <FriendsPage/> */}
        <div className="bg-[#244D3F] text-white items-center text-center space-y-5 py-10">
          <h1 className="text-6xl font-bold">KeenKeeper</h1>
          <p className="font-light">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
          <h5 className="font-semibold">Social Links</h5>
          <div className="flex gap-4 justify-center">
            <FaInstagram/>
            <FaFacebook/>
            <FaX/>
          </div>
          <div className="border-t max-w-11/12 mx-auto border-[#1A8862] flex flex-col md:flex-row justify-between pt-5">
            <p>© 2026 KeenKeeper. All rights reserved.</p>
            <ul className="flex flex-col md:flex-row gap-2 md:gap-3">
              <a><li>Privacy policy</li></a>
              <a><li>Terms of service</li></a>
              <a><li>Cookies</li></a>
            </ul>
          </div>
        </div>
        </body>
    </html>
  );
}
