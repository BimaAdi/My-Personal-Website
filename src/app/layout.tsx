import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/client/providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BimaAdi - Home",
  description: "Personal blog for BimaAdi (bimaadi419@gmail.com)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
