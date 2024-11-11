import { Inter } from "next/font/google";
import "./globals.css";
import Background from "./components/atoms/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alexandru Chatbot",
  description: "Alexandru Chatbot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <div className=" fixed z-[-1]">
          <Background />
        </div>
        {children}
      </body>
    </html>
  );
}
