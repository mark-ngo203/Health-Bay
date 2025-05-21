import "./globals.css";

// font 
import { Jaldi } from 'next/font/google';

import Header from "./components/Header";

const jaldi = Jaldi({ 
  subsets: ["latin"],
  weight: ["400", "700"] 
});

// Title for Tab 
export const metadata = {
  title: "Health Bay",
  description: "Your Healthcare Cat",
  icons: {
    icon: "/favicon.ico",
  },
};

// Page Loyouts
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jaldi.className} antialiased`}>
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
