import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin", "latin-ext"],
  weight: ["100", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tudastar.bterapia.hu"),
  title: {
    default: "BEMER Tudástár – Kiss Tamás & Karkis Katalin csapata",
    template: "%s · BEMER Tudástár",
  },
  description:
    "Zárt tudástár Kiss Tamás és Karkis Katalin BEMER Team Manager csapatának partnerei számára.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hu" className={barlow.variable}>
      <body>{children}</body>
    </html>
  );
}
