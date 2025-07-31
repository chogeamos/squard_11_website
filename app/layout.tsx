
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Squad 11 Football Club - Eldoret's Premier Grassroots Football Team",
  description: "Squad 11 Football Club - Founded in 2017 by young ICT professionals in Eldoret, Kenya. Nurturing young football talent and promoting physical fitness in our community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
