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
        <main className="bg-stone-100 min-h-screen min-w-screen">
          {/* font */}
          <div className="text-neutral-900 w-full mx-auto px-4">
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
