import "../styles/globals.css";
import Navbar from "@/components/ui/Navbar";
import BlurBackground from "@/components/ui/BlurBackground";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <BlurBackground />
        <Navbar />
        {/* Liquid Glass SVG filter */}
        {children}
        
      </body>
    </html>
  );
}