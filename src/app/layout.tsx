import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { twJoin } from "tailwind-merge";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
});

const openSans = Open_Sans({
    subsets: ["latin"],
    variable: "--font-open-sans",
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Trackwise",
    description: "Manage your team and projects with ease"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={twJoin(
                    "font-body antialiased",
                    openSans.className,
                    poppins.variable
                )}
            >
                {children}
            </body>
        </html>
    );
}
