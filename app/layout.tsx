import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#0a0a0a] text-white antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
