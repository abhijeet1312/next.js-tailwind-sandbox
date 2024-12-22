// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
// className={`${geistSans.variable} ${geistMono.variable}`}

export const metadata = {
    title: "Next JS Tailwind SandBox",
    description: "This is tutorial ",
};

export default function RootLayout({ children }) {
    return ( <
        html lang = "en" >
        <
        body > { children } < /body>{" "} <
        /html>
    );
}