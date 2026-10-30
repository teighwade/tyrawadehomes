import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-garamond/600-italic.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';
import '@fontsource/great-vibes/400.css';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE_URL, OG_IMAGE } from '../lib/site';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Teigh Wade, REALTOR® | Surprise & West Valley Homes', template: '%s | Teigh Wade REALTOR®' },
  description: 'Teigh Wade, REALTOR® with HomeSmart Elite Group, helps buyers and sellers in Surprise, Phoenix and the West Valley. Mobile notary and loan signings 24/7.',
  robots: process.env.SITE_LIVE === 'true' ? { index: true, follow: true } : { index: false, follow: false },
  icons: {
    icon: [{ url: '/icon-32.png', sizes: '32x32', type: 'image/png' }, { url: '/icon-192.png', sizes: '192x192', type: 'image/png' }],
    apple: '/apple-icon.png',
  },
  openGraph: { siteName: 'Teigh Wade Homes', type: 'website', images: [OG_IMAGE] },
  twitter: { card: 'summary_large_image', images: [OG_IMAGE.url] },
};

export const viewport = { themeColor: '#dbe6ef' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
