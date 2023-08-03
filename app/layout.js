import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "@/components/includes/Navigation";
import Footer from "@/components/includes/Footer";

import { HandymanProvider } from './context/handyman/store';
import { getData,getDomain } from '@/lib/data'

export async function generateMetadata() {
  const c = await getData();

	return {
		title: c.data.title===''?'Welcome to '+c.data.domainName:c.data.title,
		description: c.data.description,
    keywords: c.data.keywords,
    author: c.data.author
	}
}

export default function RootLayout({ children }) {
  const domain = getDomain()
  const fb_url = "facebook.com";
  const twitter_url = "twitter.com";
  const linkedin_url = "linkedin.com";
  return (
    <html lang="en">
      <body>
        <Navigation bgNavbar="tw-bg-[rgba(0,0,0,0.5)]" domain={domain} />
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
  )
}
