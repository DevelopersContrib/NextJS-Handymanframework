import CTABanner from "@/components/CTABanner";
import HeaderForm from "@/components/home/HeaderForm";
import Notification from "@/components/notification/Notification";
import TopDomains from "@/components/TopDomains";
import { getTopsites } from "@/lib/data";
import BlogList from "@/modules/blog/BlogList";
import { headers } from 'next/headers';
import { FaShieldHalved, FaHandshake, FaHouseChimney, FaBuilding, FaArrowRight } from "react-icons/fa6";

export default async function Home() {
  const background = "https://cdn.vnoc.com/handyman/handyman-bg-2.jpeg";
  const domains = await getTopsites();

  const host = headers().get('host') || 'handyman.com';
  const domainName = host.includes('localhost')
    ? 'handyman'
    : host.replace(/^www\./, '').split('.')[0];

  const capitalizedDomain = domainName.charAt(0).toUpperCase() + domainName.slice(1);

  return (
    <>
      <HeaderForm background={background} />

      <section className="tw-py-20 tw-bg-white">
        <div className="container">
          {/* Acquisition badge + headline */}
          <div className="tw-text-center tw-mb-14">
            <span className="tw-inline-flex tw-items-center tw-gap-2 tw-bg-amber-50 tw-border tw-border-amber-200 tw-text-amber-700 tw-text-xs tw-font-semibold tw-tracking-wider tw-uppercase tw-px-4 tw-py-1.5 tw-rounded-full tw-mb-5">
              <FaHandshake className="tw-w-3.5 tw-h-3.5" aria-hidden />
              Acquired by Handyman.com
            </span>
            <h2 className="tw-text-4xl sm:tw-text-5xl tw-font-bold tw-text-gray-900 tw-leading-tight tw-mb-4">
              Get Matched to a Screened<br className="tw-hidden sm:tw-block" />
              Professional Handyman
            </h2>
            <p className="tw-text-lg tw-text-gray-500 tw-max-w-2xl tw-mx-auto tw-leading-relaxed">
              {capitalizedDomain} is the industry-leading portal for home improvement, repair, and
              remodeling — connecting homeowners and contractors, completely free with no obligations.
            </p>
          </div>

          {/* Feature cards */}
          <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-3 tw-gap-6 tw-mb-12">
            <div className="tw-flex tw-flex-col tw-items-start tw-gap-4 tw-p-7 tw-rounded-2xl tw-border tw-border-gray-100 tw-bg-gray-50 hover:tw-shadow-md tw-transition-shadow tw-duration-200">
              <span className="tw-flex tw-items-center tw-justify-center tw-w-16 tw-h-16 tw-rounded-xl tw-bg-amber-400/15 tw-text-amber-500">
                <FaShieldHalved className="tw-w-9 tw-h-9" aria-hidden />
              </span>
              <div>
                <p className="tw-font-semibold tw-text-gray-900 tw-text-base tw-mb-1">Screened &amp; Verified Pros</p>
                <p className="tw-text-gray-500 tw-text-sm tw-leading-relaxed">
                  Every contractor is vetted so you can hire with confidence, knowing the job will be done right.
                </p>
              </div>
            </div>
            <div className="tw-flex tw-flex-col tw-items-start tw-gap-4 tw-p-7 tw-rounded-2xl tw-border tw-border-gray-100 tw-bg-gray-50 hover:tw-shadow-md tw-transition-shadow tw-duration-200">
              <span className="tw-flex tw-items-center tw-justify-center tw-w-16 tw-h-16 tw-rounded-xl tw-bg-amber-400/15 tw-text-amber-500">
                <FaHouseChimney className="tw-w-9 tw-h-9" aria-hidden />
              </span>
              <div>
                <p className="tw-font-semibold tw-text-gray-900 tw-text-base tw-mb-1">Free, No Obligations</p>
                <p className="tw-text-gray-500 tw-text-sm tw-leading-relaxed">
                  Our free tools and services help homeowners find the right contractor — no commitment, ever.
                </p>
              </div>
            </div>
            <div className="tw-flex tw-flex-col tw-items-start tw-gap-4 tw-p-7 tw-rounded-2xl tw-border tw-border-gray-100 tw-bg-gray-50 hover:tw-shadow-md tw-transition-shadow tw-duration-200">
              <span className="tw-flex tw-items-center tw-justify-center tw-w-16 tw-h-16 tw-rounded-xl tw-bg-amber-400/15 tw-text-amber-500">
                <FaHandshake className="tw-w-9 tw-h-9" aria-hidden />
              </span>
              <div>
                <p className="tw-font-semibold tw-text-gray-900 tw-text-base tw-mb-1">Local Area Match</p>
                <p className="tw-text-gray-500 tw-text-sm tw-leading-relaxed">
                  We connect you with experienced professionals right in your area to handle any repair or remodel.
                </p>
              </div>
            </div>
          </div>

          {/* Commercial callout */}
          <div className="tw-flex tw-flex-col sm:tw-flex-row tw-items-start sm:tw-items-center tw-gap-5 tw-p-7 tw-rounded-2xl tw-bg-zinc-900 tw-text-white">
            <span className="tw-flex tw-shrink-0 tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-rounded-xl tw-bg-white/10 tw-text-amber-400">
              <FaBuilding className="tw-w-6 tw-h-6" aria-hidden />
            </span>
            <div className="tw-flex-1">
              <p className="tw-font-semibold tw-text-base tw-mb-1">Commercial or Large Projects?</p>
              <p className="tw-text-white/70 tw-text-sm tw-leading-relaxed">
                For the commercial real estate market or projects over $5,000, {capitalizedDomain} offers a
                free consultation to analyze your needs and connect you with suppliers, general contractors,
                and local professional service providers.
              </p>
            </div>
            <a
              href="/project/post"
              className="tw-shrink-0 tw-inline-flex tw-items-center tw-gap-2 tw-bg-amber-400 hover:tw-bg-amber-300 tw-text-gray-900 tw-font-semibold tw-text-sm tw-px-5 tw-py-3 tw-rounded-xl tw-transition-colors tw-duration-200 tw-whitespace-nowrap"
            >
              Get a free consultation
              <FaArrowRight className="tw-w-3.5 tw-h-3.5" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      <TopDomains domains={domains} />

      <section className="tw-py-12">
        <div className="container">
          <BlogList />
        </div>
      </section>

      <section>
        <CTABanner />
      </section>
      <Notification />
    </>
  );
}
