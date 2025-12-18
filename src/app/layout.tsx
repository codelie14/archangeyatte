import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Archange Yatte | Développeur Full-Stack & Analyste Cybersécurité",
  description: "Portfolio professionnel d'Archange Yatte, développeur full-stack et analyste en cybersécurité. Passionné par la sécurité informatique et le développement d'applications sécurisées.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}