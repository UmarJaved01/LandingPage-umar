import './globals.css';

// Import the Raleway font (no named export)
import '@fontsource/raleway'; // This loads the font

export const metadata = {
  title: 'LandingPage',
  description: 'A modern landing page built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-raleway">{children}</body>
    </html>
  );
}