import './globals.css';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "@/components/includes/Navigation";
import Footer from "@/components/includes/Footer";

import { HandymanProvider } from './context/handyman/store';
import { getData } from '@/lib/data';

export async function generateMetadata() {
  const c = await getData();
  const data = c?.data || {};

  return {
    title: data.title?.trim() === ''
      ? `Welcome to ${data.domainName || 'our site'}`
      : data.title || 'Welcome',
    description: data.description || '',
    keywords: data.keywords || '',
    author: data.author || '',
  };
}

export default async function RootLayout({ children }) {
  const data = await getData();
  const domain = data?.data?.domainName || 'Handyman';
  const logo = data?.data?.logo || null;

  const fb_url = "facebook.com";
  const twitter_url = "twitter.com";
  const linkedin_url = "linkedin.com";

  return (
    <html lang="en">
      <body>
        <Navigation bgNavbar="tw-bg-[#111111]" domain={domain} logo={logo} />
        <HandymanProvider>
          {children}
        </HandymanProvider>
        <Footer
          domain={domain}
          fb_url={fb_url}
          twitter_url={twitter_url}
          linkedin_url={linkedin_url}
        />
      </body>
    </html>
  );
}
