import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        
        <Navbar />
        <main>{children}</main>
        <Footer />
        
      </body>
    </html>
  );
}

