import './globals.css';
import '../assets/fonts/poppins/stylesheet.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}