"use client";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaClipboardList, FaMessage, FaGift, FaCircleCheck, FaUsers } from "react-icons/fa6";

import { HandymanContext } from "@/app/context/handyman/store";

const HeaderForm = ({ background }) => {
  const router = useRouter();
  const { handymanConfigs, setHandymanConfigs } = useContext(HandymanContext);
  const [option, setOption] = useState(1);
  const [data, setData] = useState({
    projectType: "",
    zip: "",
  });

  const handleOption = (e, opt) => {
    e.preventDefault();
    setOption(opt);
  };

  const handleProjectTypeChange = (e) => {
    setData((prevUrlQuery) => ({
      ...prevUrlQuery,
      projectType: e.target.value,
    }));
  };

  const handleInputChange = (e) => {
    if (option === 1) {
      setData((prevUrlQuery) => ({
        ...prevUrlQuery,
        zip: e.target.value,
      }));
    }
  };

  const handleClickGo = () => {
    if (option === 2) {
      // console.log("im here");
      router.push("https://handyman.com/");
    } else {
      router.push("/project/post?project-type-id=" + data.projectType + "&zip=" + data.zip);
    }
  };

  const callHandymanApi = async () => {
    const res = await fetch("/api/handyman", {
      method: "GET",
    });

    const result = await res.json();

    setHandymanConfigs(result.data);
  };

  useEffect(() => {
    callHandymanApi();
  }, []);

  return (
    <>
      <div
        className="tw-min-h-screen tw-pt-8 tw-pb-12 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-relative tw-flex tw-w-full tw-items-center tw-justify-center tw-overflow-hidden"
        style={{ backgroundImage: `url('${background}')` }}
      >
        {/* Full-viewport gradient overlay */}
        <div
          className="tw-absolute tw-inset-0 tw-pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,12,18,0.55) 0%, rgba(12,12,18,0.75) 45%, rgba(12,12,18,0.92) 100%)",
          }}
        />
        <div className="container tw-relative tw-text-white tw-flex tw-items-center tw-justify-center tw-px-4 sm:tw-px-6 tw-w-full tw-min-h-0">
          <div className="row tw-w-full tw-justify-center tw-mx-0">
            <div className="col-xl-10 col-lg-10 tw-max-w-5xl tw-mx-auto">
              {/* Headline */}
              <div className="tw-text-center tw-mb-8 tw-animate-[fadeIn_0.6s_ease-out]">
                <h1 className="tw-text-4xl sm:tw-text-5xl lg:tw-text-6xl xl:tw-text-7xl tw-font-bold tw-tracking-tight tw-leading-[1.1] tw-mb-3">
                  Find your handyman solution
                </h1>
                <p className="tw-text-base sm:tw-text-lg tw-text-white/85 tw-max-w-md tw-mx-auto">
                  Choose how you’d like to get started.
                </p>
              </div>

              {/* Tabs — underline style, minimal */}
              <div
                className="tw-flex tw-justify-center tw-border-b tw-border-white/20 tw-mb-4 tw-animate-[fadeIn_0.5s_ease-out_0.1s_both]"
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
                  className={`tw-inline-flex tw-items-center tw-gap-2 tw-px-5 sm:tw-px-6 tw-pt-3 tw-pb-3 tw-rounded-t-lg tw-font-medium tw-text-sm sm:tw-text-base tw-tracking-tight tw-transition-all tw-duration-200 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-white/60 focus:tw-ring-offset-2 focus:tw-ring-offset-transparent tw-text-white tw-bg-white/10 tw-border-b-2 ${
                    option === 1
                      ? "tw-border-amber-400 tw--mb-px"
                      : "tw-border-transparent hover:tw-bg-white/15"
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
                  className={`tw-inline-flex tw-items-center tw-gap-2 tw-px-5 sm:tw-px-6 tw-pt-3 tw-pb-3 tw-rounded-t-lg tw-font-medium tw-text-sm sm:tw-text-base tw-tracking-tight tw-transition-all tw-duration-200 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-white/60 focus:tw-ring-offset-2 focus:tw-ring-offset-transparent tw-text-white tw-bg-white/10 tw-border-b-2 ${
                    option === 2
                      ? "tw-border-amber-400 tw--mb-px"
                      : "tw-border-transparent hover:tw-bg-white/15"
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
                className="tw-w-full tw-mx-auto tw-rounded-3xl tw-p-6 sm:tw-p-10 tw-backdrop-blur-xl tw-bg-white/[0.12] tw-border tw-border-white/25 tw-shadow-[0_8px_32px_rgba(0,0,0,0.25)] tw-animate-[fadeIn_0.5s_ease-out_0.15s_both]"
              >
                <p className="tw-text-white/95 tw-font-medium tw-mb-6 tw-text-center tw-text-sm sm:tw-text-base">
                  {option === 1
                    ? "Share your project and location — we’ll match you with a screened pro."
                    : "Submit your question and we’ll get you expert advice."}
                </p>
                <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-4 tw-w-full">
                  <div className="tw-flex-1 tw-min-w-0">
                    <label htmlFor="hero-project-type" className="tw-sr-only">
                      Project type
                    </label>
                    <select
                      id="hero-project-type"
                      className="form-select tw-w-full tw-h-14 tw-rounded-2xl tw-border-2 tw-border-white/40 tw-bg-white tw-text-gray-800 tw-py-0 tw-px-5 tw-text-base tw-font-medium placeholder:tw-text-gray-500 focus:tw-ring-2 focus:tw-ring-amber-400/60 focus:tw-border-amber-400 focus:tw-outline-none tw-transition-all tw-duration-200"
                      onChange={handleProjectTypeChange}
                    >
                      <option value="0">Select project type</option>
                      {handymanConfigs &&
                        handymanConfigs.projectTypes.map((p) => (
                          <option key={p.projectTypeId} value={p.projectTypeId}>
                            {p.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="tw-flex-1 tw-min-w-0">
                    <label htmlFor="hero-input" className="tw-sr-only">
                      {option === 1 ? "Zip code" : "Your question"}
                    </label>
                    <input
                      id="hero-input"
                      type="text"
                      className="form-control tw-w-full tw-h-14 tw-rounded-2xl tw-border-2 tw-border-white/40 tw-bg-white tw-text-gray-800 tw-py-0 tw-px-5 tw-text-base placeholder:tw-text-gray-500 focus:tw-ring-2 focus:tw-ring-amber-400/60 focus:tw-border-amber-400 focus:tw-outline-none tw-transition-all tw-duration-200"
                      placeholder={option === 1 ? "Enter zip code" : "Type your question…"}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="tw-shrink-0 lg:tw-w-auto">
                    <button
                      type="button"
                      onClick={handleClickGo}
                      disabled={handymanConfigs === null}
                      className="tw-w-full lg:tw-w-auto tw-h-14 tw-flex tw-items-center tw-justify-center tw-px-10 tw-rounded-2xl tw-font-bold tw-text-base tw-bg-amber-400 hover:tw-bg-amber-300 tw-text-gray-900 tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-duration-200 disabled:tw-opacity-60 disabled:tw-cursor-not-allowed focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-amber-400 focus:tw-ring-offset-2 focus:tw-ring-offset-white/20 active:tw-scale-[0.98]"
                    >
                      {handymanConfigs === null ? "Loading…" : "Get started"}
                    </button>
                  </div>
                </div>
                {/* Trust cards */}
                <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-3 tw-gap-4 tw-mt-8 tw-pt-6 tw-border-t tw-border-white/20">
                  <div className="tw-flex tw-items-start tw-gap-4 tw-p-4 tw-rounded-xl tw-bg-white/5 tw-border tw-border-white/10">
                    <span className="tw-flex tw-shrink-0 tw-items-center tw-justify-center tw-w-10 tw-h-10 tw-rounded-lg tw-bg-white/15 tw-text-amber-400">
                      <FaGift className="tw-w-5 tw-h-5" aria-hidden />
                    </span>
                    <div>
                      <p className="tw-text-white tw-font-semibold tw-text-sm tw-mb-0.5">Free</p>
                      <p className="tw-text-white/70 tw-text-xs tw-leading-relaxed">
                        No cost to get matched with a local pro.
                      </p>
                    </div>
                  </div>
                  <div className="tw-flex tw-items-start tw-gap-4 tw-p-4 tw-rounded-xl tw-bg-white/5 tw-border tw-border-white/10">
                    <span className="tw-flex tw-shrink-0 tw-items-center tw-justify-center tw-w-10 tw-h-10 tw-rounded-lg tw-bg-white/15 tw-text-amber-400">
                      <FaCircleCheck className="tw-w-5 tw-h-5" aria-hidden />
                    </span>
                    <div>
                      <p className="tw-text-white tw-font-semibold tw-text-sm tw-mb-0.5">No obligation</p>
                      <p className="tw-text-white/70 tw-text-xs tw-leading-relaxed">
                        Get quotes with no commitment required.
                      </p>
                    </div>
                  </div>
                  <div className="tw-flex tw-items-start tw-gap-4 tw-p-4 tw-rounded-xl tw-bg-white/5 tw-border tw-border-white/10">
                    <span className="tw-flex tw-shrink-0 tw-items-center tw-justify-center tw-w-10 tw-h-10 tw-rounded-lg tw-bg-white/15 tw-text-amber-400">
                      <FaUsers className="tw-w-5 tw-h-5" aria-hidden />
                    </span>
                    <div>
                      <p className="tw-text-white tw-font-semibold tw-text-sm tw-mb-0.5">Trusted by thousands</p>
                      <p className="tw-text-white/70 tw-text-xs tw-leading-relaxed">
                        Homeowners rely on us to find screened pros.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderForm;
