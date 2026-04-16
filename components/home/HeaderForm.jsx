"use client";
import { useState, useContext, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaClipboardList, FaMessage, FaGift, FaCircleCheck, FaUsers } from "react-icons/fa6";

import { HandymanContext } from "@/app/context/handyman/store";

const SkeletonSelect = () => (
  <div className="tw-w-full tw-h-14 tw-rounded-2xl tw-bg-white/20 tw-animate-pulse" />
);

const HeaderForm = ({ background }) => {
  const router = useRouter();
  const { handymanConfigs, setHandymanConfigs } = useContext(HandymanContext);
  const [option, setOption] = useState(1);
  const [tabFading, setTabFading] = useState(false);
  const fadeTimeout = useRef(null);
  const [data, setData] = useState({
    projectType: "",
    zip: "",
  });

  const handleOption = (e, opt) => {
    e.preventDefault();
    if (opt === option) return;
    setTabFading(true);
    clearTimeout(fadeTimeout.current);
    fadeTimeout.current = setTimeout(() => {
      setOption(opt);
      setTabFading(false);
    }, 150);
  };

  const handleProjectTypeChange = (e) => {
    setData((prev) => ({ ...prev, projectType: e.target.value }));
  };

  const handleInputChange = (e) => {
    if (option === 1) {
      setData((prev) => ({ ...prev, zip: e.target.value }));
    }
  };

  const handleClickGo = () => {
    if (option === 2) {
      router.push("https://handyman.com/");
    } else {
      router.push("/project/post?project-type-id=" + data.projectType + "&zip=" + data.zip);
    }
  };

  const callHandymanApi = async () => {
    const res = await fetch("/api/handyman", { method: "GET" });
    const result = await res.json();
    setHandymanConfigs(result.data);
  };

  useEffect(() => {
    callHandymanApi();
  }, []);

  useEffect(() => {
    return () => clearTimeout(fadeTimeout.current);
  }, []);

  const isLoading = handymanConfigs === null;

  return (
    <div
      className="tw-min-h-screen tw-pt-8 tw-pb-12 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-relative tw-flex tw-w-full tw-items-center tw-justify-center tw-overflow-hidden"
      style={{ backgroundImage: `url('${background}')` }}
    >
      {/* Gradient overlay */}
      <div
        className="tw-absolute tw-inset-0 tw-pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(12,12,18,0.55) 0%, rgba(12,12,18,0.75) 45%, rgba(12,12,18,0.92) 100%)",
        }}
      />

      {/* Decorative ambient glow orbs */}
      <div className="tw-absolute tw-top-[15%] tw-left-[10%] tw-w-[340px] tw-h-[340px] tw-rounded-full tw-bg-amber-400/[0.07] tw-blur-[100px] tw-pointer-events-none" />
      <div className="tw-absolute tw-bottom-[10%] tw-right-[8%] tw-w-[280px] tw-h-[280px] tw-rounded-full tw-bg-sky-400/[0.05] tw-blur-[100px] tw-pointer-events-none" />

      <div className="tw-relative tw-text-white tw-flex tw-items-center tw-justify-center tw-px-4 sm:tw-px-6 tw-w-full tw-min-h-0 tw-max-w-7xl tw-mx-auto">
        <div className="tw-w-full tw-flex tw-justify-center">
          <div className="tw-w-full tw-max-w-5xl">
            {/* Headline */}
            <div className="tw-text-center tw-mb-8 tw-animate-[fadeIn_0.6s_ease-out]">
              <h1 className="tw-text-4xl sm:tw-text-5xl lg:tw-text-6xl xl:tw-text-7xl tw-font-bold tw-tracking-tight tw-leading-[1.08] tw-mb-3">
                Find your handyman solution
              </h1>
              <p className="tw-text-base sm:tw-text-lg tw-text-white/80 tw-max-w-md tw-mx-auto tw-leading-relaxed">
                Choose how you&#39;d like to get started.
              </p>
            </div>

            {/* Tabs — pill style */}
            <div
              className="tw-flex tw-justify-center tw-gap-2 tw-mb-5 tw-animate-[fadeIn_0.5s_ease-out_0.1s_both]"
              role="tablist"
              aria-label="Choose how to get started"
            >
              <button
                type="button"
                role="tab"
                aria-selected={option === 1}
                aria-controls="hero-form"
                id="tab-estimate"
                onClick={(e) => handleOption(e, 1)}
                className={`tw-inline-flex tw-items-center tw-gap-2 tw-px-5 sm:tw-px-6 tw-py-3 tw-rounded-xl tw-font-medium tw-text-sm sm:tw-text-base tw-tracking-tight tw-transition-all tw-duration-200 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-white/60 focus:tw-ring-offset-2 focus:tw-ring-offset-transparent ${
                  option === 1
                    ? "tw-bg-white/20 tw-text-white tw-shadow-lg tw-shadow-black/10 tw-border tw-border-white/30"
                    : "tw-bg-white/5 tw-text-white/70 tw-border tw-border-transparent hover:tw-bg-white/10 hover:tw-text-white"
                }`}
              >
                <FaClipboardList className="tw-w-4 tw-h-4 tw-shrink-0" aria-hidden />
                Get an estimate
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={option === 2}
                aria-controls="hero-form"
                id="tab-expert"
                onClick={(e) => handleOption(e, 2)}
                className={`tw-inline-flex tw-items-center tw-gap-2 tw-px-5 sm:tw-px-6 tw-py-3 tw-rounded-xl tw-font-medium tw-text-sm sm:tw-text-base tw-tracking-tight tw-transition-all tw-duration-200 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-white/60 focus:tw-ring-offset-2 focus:tw-ring-offset-transparent ${
                  option === 2
                    ? "tw-bg-white/20 tw-text-white tw-shadow-lg tw-shadow-black/10 tw-border tw-border-white/30"
                    : "tw-bg-white/5 tw-text-white/70 tw-border tw-border-transparent hover:tw-bg-white/10 hover:tw-text-white"
                }`}
              >
                <FaMessage className="tw-w-4 tw-h-4 tw-shrink-0" aria-hidden />
                Ask an expert
              </button>
            </div>

            {/* Form card */}
            <div
              id="hero-form"
              role="tabpanel"
              aria-labelledby={option === 1 ? "tab-estimate" : "tab-expert"}
              className="tw-w-full tw-mx-auto tw-rounded-3xl tw-p-6 sm:tw-p-10 tw-backdrop-blur-xl tw-bg-white/[0.10] tw-border tw-border-white/20 tw-shadow-[0_8px_40px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)_inset] tw-animate-[fadeIn_0.5s_ease-out_0.15s_both]"
            >
              <div
                className={`tw-transition-all tw-duration-150 tw-ease-in-out ${
                  tabFading ? "tw-opacity-0 tw-translate-y-1" : "tw-opacity-100 tw-translate-y-0"
                }`}
              >
                <p className="tw-text-white/90 tw-font-medium tw-mb-6 tw-text-center tw-text-sm sm:tw-text-base">
                  {option === 1
                    ? "Share your project and location \u2014 we\u2019ll match you with a screened pro."
                    : "Submit your question and we\u2019ll get you expert advice."}
                </p>
                <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-4 tw-w-full">
                  <div className="tw-flex-1 tw-min-w-0">
                    <label htmlFor="hero-project-type" className="tw-sr-only">
                      Project type
                    </label>
                    {isLoading ? (
                      <SkeletonSelect />
                    ) : (
                      <select
                        id="hero-project-type"
                        className="tw-appearance-none tw-w-full tw-h-14 tw-rounded-2xl tw-border tw-border-white/30 tw-bg-white tw-text-gray-800 tw-py-0 tw-px-5 tw-text-base tw-font-medium tw-cursor-pointer focus:tw-ring-2 focus:tw-ring-amber-400/60 focus:tw-border-amber-400 focus:tw-outline-none tw-transition-all tw-duration-200 tw-bg-[length:1.25rem_1.25rem] tw-bg-[right_0.75rem_center] tw-bg-no-repeat tw-pr-10"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%236b7280'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                        }}
                        onChange={handleProjectTypeChange}
                      >
                        <option value="0">Select project type</option>
                        {handymanConfigs.projectTypes.map((p) => (
                          <option key={p.projectTypeId} value={p.projectTypeId}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  <div className="tw-flex-1 tw-min-w-0">
                    <label htmlFor="hero-input" className="tw-sr-only">
                      {option === 1 ? "Zip code" : "Your question"}
                    </label>
                    <input
                      id="hero-input"
                      type="text"
                      className="tw-w-full tw-h-14 tw-rounded-2xl tw-border tw-border-white/30 tw-bg-white tw-text-gray-800 tw-py-0 tw-px-5 tw-text-base placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-amber-400/60 focus:tw-border-amber-400 focus:tw-outline-none tw-transition-all tw-duration-200"
                      placeholder={option === 1 ? "Enter zip code" : "Type your question\u2026"}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="tw-shrink-0 lg:tw-w-auto">
                    <button
                      type="button"
                      onClick={handleClickGo}
                      disabled={isLoading}
                      className="tw-w-full lg:tw-w-auto tw-h-14 tw-flex tw-items-center tw-justify-center tw-px-10 tw-rounded-2xl tw-font-bold tw-text-base tw-bg-gradient-to-r tw-from-amber-400 tw-to-amber-500 hover:tw-from-amber-300 hover:tw-to-amber-400 tw-text-gray-900 tw-shadow-[0_4px_24px_rgba(251,191,36,0.35)] hover:tw-shadow-[0_6px_32px_rgba(251,191,36,0.5)] tw-transition-all tw-duration-200 disabled:tw-opacity-50 disabled:tw-cursor-not-allowed disabled:tw-shadow-none focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-amber-400 focus:tw-ring-offset-2 focus:tw-ring-offset-white/20 active:tw-scale-[0.97]"
                    >
                      {isLoading ? (
                        <span className="tw-flex tw-items-center tw-gap-2">
                          <svg className="tw-animate-spin tw-w-4 tw-h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="tw-opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="tw-opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Loading&hellip;
                        </span>
                      ) : (
                        "Get started"
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Trust cards */}
              <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-3 tw-gap-4 tw-mt-8 tw-pt-6 tw-border-t tw-border-white/15">
                {[
                  { icon: FaGift, title: "Free", desc: "No cost to get matched with a local pro." },
                  { icon: FaCircleCheck, title: "No obligation", desc: "Get quotes with no commitment required." },
                  { icon: FaUsers, title: "Trusted by thousands", desc: "Homeowners rely on us to find screened pros." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="tw-flex tw-items-start tw-gap-4 tw-p-4 tw-rounded-xl tw-bg-white/[0.04] tw-border tw-border-white/10 hover:tw-bg-white/[0.08] tw-transition-colors tw-duration-200"
                  >
                    <span className="tw-flex tw-shrink-0 tw-items-center tw-justify-center tw-w-10 tw-h-10 tw-rounded-lg tw-bg-amber-400/15 tw-text-amber-400">
                      <Icon className="tw-w-5 tw-h-5" aria-hidden />
                    </span>
                    <div>
                      <p className="tw-text-white tw-font-semibold tw-text-sm tw-mb-0.5">{title}</p>
                      <p className="tw-text-white/60 tw-text-xs tw-leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderForm;
