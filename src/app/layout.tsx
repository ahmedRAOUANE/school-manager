import type { Metadata } from "next";

import "@/styles/customes.css";
import "@/styles/globals.css";
import "@/styles/layout.css";
import "@/styles/button.css";
import "@/styles/modal.css";

export const metadata: Metadata = {
  title: "school manager",
  description: "Craeted By Ahmed Raouane",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
