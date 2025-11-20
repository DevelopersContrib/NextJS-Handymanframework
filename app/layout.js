import './globals.css';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "@/components/includes/Navigation";
import Footer from "@/components/includes/Footer";

import { HandymanProvider } from './context/handyman/store';
import { getData } from '@/lib/data';
import First100FoundersModalWrapper from "@/components/First100FoundersModalWrapper";

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  const c = await getData();
  const data = c?.data || {};
  const domain = data.domainName || 'our site';

  const title = !data.title?.trim()
    ? `Welcome to ${domain}`
    : data.title;

  const description = data.description?.trim()
    || `Explore ${domain}, a modern platform for services and community engagement.`;

  const keywords = data.keywords?.trim()
    ? data.keywords.split(',')
    : ['handyman', 'services', 'community'];

  const author = data.author?.trim() || 'Contrib';

  const defaultImage = `https://cdn.vnoc.com/default-og.jpg`;
  const ogImage = data.ogImage || `https://${domain}/images/og-image.jpg`;
  const twitterImage = data.twitterImage || `https://${domain}/images/twitter-image.jpg`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: author }],
    openGraph: {
      title,
      description,
      siteName: domain,
      type: 'website',
      locale: 'en_US',
      url: `https://${domain}`,
      images: [ogImage || defaultImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [twitterImage || defaultImage],
    },
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
        <First100FoundersModalWrapper />
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
