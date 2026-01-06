import type { Metadata } from "next";
import "@/assets/styles/globals.scss";
import { Providers } from "@/app/providers";

export const metadata: Metadata = {
  title: "Стоматология Клевер - Современная стоматология для всей семьи",
  description: "Стоматологическая клиника Клевер. Имплантация, протезирование, ортодонтия, эстетическая стоматология. Экспертный уровень лечения с заботой о каждом пациенте.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Providers>
          {children}
      </Providers>
      </body>
    </html>
  );
}
