import "./globals.css";

// font 
import { Inter } from 'next/font/google';

import Header from "./components/Header";

const inter = Inter({ subset: ["latin"] });

// Title for Tab 
export const metadata = {
  title: "Health Bay",
  description: "Your AI Health Companion",
  icons: {
    icon: "/favicon.ico",
  },
};

// Page Loyouts
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* background settings and colors */}
        <main className="flex justify-center bg-stone-100 min-h-screen w-full">
          {/* font */}
          <div className="text-neutral-900">
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
