import "../styles/globals.css";
import Navbar from "@/components/ui/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Navbar />
        {/* Liquid Glass SVG filter */}
        {children}
        
      </body>
    </html>
  );
}