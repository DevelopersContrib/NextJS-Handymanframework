import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { HandymanProvider } from './context/handyman/store';
import { getData } from '@/lib/data'

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
  return (
    <html lang="en">
      <body>
        <HandymanProvider>
          {children}
        </HandymanProvider>
      </body>
    </html>
  )
}
