import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Le Nexus Connecté",
    description: "Portail d'interaction dynamique pour la Nuit de l'Info",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body
                className={`${inter.className} antialiased min-h-screen bg-[url('/assets/grid.svg')] bg-fixed`}
            >
                {children}
            </body>
        </html>
    );
}
