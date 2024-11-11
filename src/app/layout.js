import { Inter } from "next/font/google";
import "./globals.css";
import Background from "./components/atoms/Background";
import favicon from "../assets/UNYJK-180x180.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Resolution Chatbot",
  description: "Resolution Chatbot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} type="image/png" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className=" fixed z-[-1]">
          <Background />
        </div>
        {children}
      </body>
    </html>
  );
}
