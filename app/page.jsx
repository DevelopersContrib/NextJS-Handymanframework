import { headers } from 'next/headers';
import { getTopsites } from "@/lib/data";
import HeaderForm from "@/components/home/HeaderForm";
import TopDomains from "@/components/TopDomains";
import BlogList from "@/modules/blog/BlogList";
import CTABanner from "@/components/CTABanner";

export default async function Home() {
  const background = "https://cdn.vnoc.com/background/bg-handyman1.png";
  const domains = await getTopsites();

  const host = headers().get('host') || 'handyman.com';
  const domainName = host.includes('localhost')
    ? 'handyman'
    : host.replace(/^www\./, '').split('.')[0];

  const capitalizedDomain = domainName.charAt(0).toUpperCase() + domainName.slice(1);

  return (
    <>
      <HeaderForm background={background} />

      <section className="tw-py-24 tw-bg-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <h1 className="tw-text-5xl tw-font-medium tw-mb-4">
                Acquired by {capitalizedDomain}.com
              </h1>
              <h5 className="tw-mb-4">
                Get Matched to a Screened Professional Handyman
              </h5>
              <p>
                {capitalizedDomain} helps you find an experienced, professional Handyman contractor
                in your local area, FREE, NO OBLIGATIONS. {capitalizedDomain} is the industry
                leading portal for the home improvement, home repair and remodeling industry. Our
                free tools and services help both homeowners and contractors facilitate the process
                to accomplish your home repair and remodeling needs.
              </p>
              <p>
                For the commercial real estate market or projects over $5,000, {capitalizedDomain}
                offers a free consultation service to analyze your needs and find suppliers,
                general contractors and local professional service providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tw-bg-[#E7E7E7]">
        {/* your CTA tiles here */}
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <TopDomains domains={domains} />
            </div>
          </div>
          <BlogList />
        </div>
      </section>

      <section>
        <CTABanner />
      </section>
    </>
  );
}
