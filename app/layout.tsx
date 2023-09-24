import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

export const metadata = {
  title: "Anas Bensaid",
  description: "Anas Bensaid's Personal Porfolio",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={`${font.className} bg-light dark:bg-dark text-dark dark:text-light`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
