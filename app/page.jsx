import HeaderForm from "@/components/home/HeaderForm";
import TopDomains from "@/components/TopDomains";

import { getTopsites } from "@/lib/data";

const Home = async () => {
  const background = "https://cdn.vnoc.com/background/bg-handyman1.png";
  const domains = await getTopsites();

  return (
    <>
      <HeaderForm background={background} />
      <section className="tw-py-24 tw-bg-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <h1 className="tw-text-5xl tw-font-medium tw-mb-4">
                Acquired by Handyman.com
              </h1>
              <h5 className="tw-mb-4">
                Get Matched to a Screened Professional Handyman
              </h5>
              <p>
                Homeremodelinginc.com helps you find an experienced,
                professional Handyman contractor in your local area, FREE, NO
                OBLIGATIONS. Homeremodelinginc.com is the industry leading
                portal for the home improvement, home repair and remodeling
                industry. Our free tools and services help both homeowners and
                contractors facilitate the process to accomplish your home
                repair and remodeling needs. Serving the Home and Contractor
                market. Why use our pros?
              </p>
              <p>
                For the commercial real estate market or projects over $5,000,
                Homeremodelinginc.com offers a free consultation service to
                analyze your needs and find suppliers, general contractors and
                local professional service providers. Are you lacking a
                professional website or want to communicate more efficiently
                with your customer or contractor? Get a Free Webpage and Free
                Consultation and manage it online. Need professional and
                experienced contractors, subcontractors or handymen due to an
                increase in your work load? You have come to the right place at
                Homeremodelinginc.com, your local referral and local handyman
                service provider.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-bg-[#E7E7E7]">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 tw-bg-[#EDD342] tw-border-solid tw-border-0 tw-border-b-[6px]  tw-border-b-white">
              <a
                href="/project/post"
                className="tw-flex tw-w-full tw-flex-col tw-py-8 tw-px-4 tw-text-black tw-no-underline tw-text-center"
              >
                <span className="tw-font-semibold tw-uppercase">
                  post a project
                </span>
                <span className="tw-font-semibold tw-capitalize tw-text-xs tw-mt-1">
                  Home owner post your project free
                </span>
              </a>
            </div>
            <div className="col-xl-3 hover:tw-bg-[#b1fa62] tw-border-solid tw-border-0 tw-border-b-[6px]  tw-border-b-[#B1FA62] hover:tw-border-b-white">
              <a
                href="https://handyman.com/contractor/find"
                className="tw-flex tw-w-full tw-flex-col tw-py-8 tw-px-4 tw-text-black tw-no-underline tw-text-center"
              >
                <span className="tw-font-semibold tw-uppercase">
                  FIND CONTRACTOR
                </span>
                <span className="tw-font-semibold tw-capitalize tw-text-xs tw-mt-1">
                  Contractors in Your Area Now
                </span>
              </a>
            </div>
            <div className="col-xl-3 hover:tw-bg-[#62e6fa] tw-border-solid tw-border-0 tw-border-b-[6px]  tw-border-b-[#62e6fa] hover:tw-border-b-white">
              <a
                href="https://handyman.com/project/find"
                className="tw-flex tw-w-full tw-flex-col tw-py-8 tw-px-4 tw-text-black tw-no-underline tw-text-center"
              >
                <span className="tw-font-semibold tw-uppercase">
                  FIND PROJECT
                </span>
                <span className="tw-font-semibold tw-capitalize tw-text-xs tw-mt-1">
                  Get Contractor Projects
                </span>
              </a>
            </div>
            <div className="col-xl-3 hover:tw-bg-[#F6AD89] tw-border-solid tw-border-0 tw-border-b-[6px]  tw-border-b-[#F6AD89] hover:tw-border-b-white">
              <a
                href="https://handyman.com/home/how-it-works"
                className="tw-flex tw-w-full tw-flex-col tw-py-8 tw-px-4 tw-text-black tw-no-underline tw-text-center"
              >
                <span className="tw-font-semibold tw-uppercase">
                  HOW IT WORKS
                </span>
                <span className="tw-font-semibold tw-capitalize tw-text-xs tw-mt-1">
                  Free Match-up for your project!
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <TopDomains domains={domains} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
