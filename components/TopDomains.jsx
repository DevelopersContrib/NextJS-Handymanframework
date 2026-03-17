"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import LoadingState from "./LoadingState";
import { FaArrowRight, FaArrowLeft, FaGlobe } from "react-icons/fa6";

const TopDomains = ({ domains }) => {
  return (
    <section className="tw-py-20 tw-bg-gray-50">
      <div className="container">

        {/* Section heading */}
        <div className="tw-flex tw-flex-col sm:tw-flex-row sm:tw-items-end tw-justify-between tw-gap-6 tw-mb-10">
          <div>
            <span className="tw-inline-flex tw-items-center tw-gap-2 tw-bg-amber-50 tw-border tw-border-amber-200 tw-text-amber-700 tw-text-xs tw-font-semibold tw-tracking-wider tw-uppercase tw-px-4 tw-py-1.5 tw-rounded-full tw-mb-4">
              <FaGlobe className="tw-w-3.5 tw-h-3.5" aria-hidden />
              Our Network
            </span>
            <h2 className="tw-text-4xl tw-font-bold tw-text-gray-900 tw-mb-2">
              Our Top Brands
            </h2>
            <p className="tw-text-gray-500 tw-text-base tw-max-w-lg tw-leading-relaxed">
              Explore our network of trusted home service brands — each connecting homeowners
              with verified local professionals.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="tw-flex tw-gap-2 tw-shrink-0">
            <button
              className="brands-prev tw-flex tw-items-center tw-justify-center tw-w-10 tw-h-10 tw-rounded-full tw-bg-white tw-border tw-border-gray-200 tw-shadow-sm hover:tw-shadow-md hover:tw-border-amber-300 tw-transition-all tw-duration-200 tw-text-gray-600 hover:tw-text-gray-900"
              aria-label="Previous brand"
            >
              <FaArrowLeft className="tw-w-3.5 tw-h-3.5" />
            </button>
            <button
              className="brands-next tw-flex tw-items-center tw-justify-center tw-w-10 tw-h-10 tw-rounded-full tw-bg-white tw-border tw-border-gray-200 tw-shadow-sm hover:tw-shadow-md hover:tw-border-amber-300 tw-transition-all tw-duration-200 tw-text-gray-600 hover:tw-text-gray-900"
              aria-label="Next brand"
            >
              <FaArrowRight className="tw-w-3.5 tw-h-3.5" />
            </button>
          </div>
        </div>

        {/* Swiper carousel */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          navigation={{ prevEl: ".brands-prev", nextEl: ".brands-next" }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
          }}
          modules={[Navigation, Autoplay]}
          className="tw-pb-4"
        >
          {!domains || !domains.data?.domains ? (
            <SwiperSlide>
              <LoadingState />
            </SwiperSlide>
          ) : (
            domains.data.domains.map((domain) => (
              <SwiperSlide key={domain.domain}>
                <div className="tw-flex tw-flex-col tw-h-full tw-bg-white tw-border tw-border-gray-100 tw-rounded-2xl tw-shadow-sm hover:tw-shadow-md tw-transition-shadow tw-duration-200 tw-overflow-hidden">

                  {/* Logo area */}
                  <div className="tw-flex tw-items-center tw-justify-center tw-h-24 tw-bg-gray-50 tw-border-b tw-border-gray-100 tw-px-6">
                    <Image
                      src={domain.logo}
                      width={180}
                      height={56}
                      className="tw-object-contain tw-max-h-12 tw-w-auto"
                      alt={domain.domain}
                      priority
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/240x64/1c1917/fbbf24?text=${encodeURIComponent(domain.domain)}&font=montserrat`;
                      }}
                    />
                  </div>

                  {/* Card body */}
                  <div className="tw-flex tw-flex-col tw-flex-1 tw-p-6">
                    <h4 className="tw-font-bold tw-text-gray-900 tw-text-lg tw-capitalize tw-mb-2">
                      {domain.domain}
                    </h4>
                    <p className="tw-text-gray-500 tw-text-sm tw-leading-relaxed tw-flex-1 tw-mb-5">
                      A trusted platform connecting homeowners with vetted local professionals
                      for all home service needs.
                    </p>

                    {/* Action buttons */}
                    <div className="tw-flex tw-gap-2">
                      <a
                        href={domain.site_link}
                        className="tw-flex-1 tw-inline-flex tw-items-center tw-justify-center tw-gap-1.5 tw-bg-amber-400 hover:tw-bg-amber-300 tw-text-gray-900 tw-font-semibold tw-text-sm tw-px-4 tw-py-2.5 tw-rounded-xl tw-transition-colors tw-duration-200 tw-no-underline"
                      >
                        Visit Site
                        <FaArrowRight className="tw-w-3 tw-h-3" />
                      </a>
                      <a
                        href={domain.brand_link}
                        className="tw-flex-1 tw-inline-flex tw-items-center tw-justify-center tw-bg-zinc-900 hover:tw-bg-zinc-700 tw-text-white tw-font-semibold tw-text-sm tw-px-4 tw-py-2.5 tw-rounded-xl tw-transition-colors tw-duration-200 tw-no-underline"
                      >
                        Details
                      </a>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>

      </div>
    </section>
  );
};

export default TopDomains;
