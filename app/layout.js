import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DataProvider } from "./context/DataContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Book Health Checks, Lab tests, Online Medicine & Doctor Consultation | MediBuddy",
  description:
    "MediBuddy is one of the best (cashless) healthcare providers in India. At MediBuddy you can book Health check packages, online lab tests, online medicines, online doctor consultation, teleconsultation, dental consultation and many more. You can also book outpatient, inpatient, and wellness services online on MediBuddy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}
