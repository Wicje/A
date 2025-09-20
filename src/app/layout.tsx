import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "GraphicsEnterprise — Brand Design Studio",
  description: "Enterprise brand identity and systems",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

