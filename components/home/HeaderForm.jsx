"use client";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaFax, FaCircleInfo } from "react-icons/fa6";

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
      console.log("im here");
      router.push("https://handyman.com/");
    } else {
      router.push("/project/post?id=" + data.projectType + "&zip=" + data.zip);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div
        className="tw-pt-24 lg:tw-min-h-[600px] tw-bg-cover tw-bg-center tw-relative tw-flex tw-w-full tw-items-center tw-flex-col"
        style={{ backgroundImage: `url('${background}')` }}
      >
        <div className="tw-bg-[rgba(17,17,17,0.45)] tw-absolute tw-left-0 tw-top-0 tw-bottom-0 tw-right-0"></div>
        <div className="container text-center tw-relative tw-text-white tw-flex tw-h-full tw-flex-1">
          <div className="row tw-w-full">
            <div className="col-xl-8 offset-lg-2 tw-mb-5">
              {/* Start:: Form */}
              <div className="tw-mt-12 ">
                <h1 className="text-center tw-text-7xl tw-font-bold tw-my-5">
                  {option === 1 ? "Get an estimate!" : "Ask an expert!"}
                </h1>
                <div className="tw-bg-[rgba(0,0,0,.25)] tw-p-5 tw-rounded-md">
                  <div className="input-group input-group-lg">
                    <select
                      className="form-select"
                      onChange={handleProjectTypeChange}
                    >
                      <option value="0"></option>
                      {handymanConfigs &&
                        handymanConfigs.projectTypes.map((p) => (
                          <option key={p.projectTypeId} value={p.projectTypeId}>
                            {p.name}
                          </option>
                        ))}
                    </select>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={option === 1 ? "Zip" : "Question"}
                      onChange={handleInputChange}
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={handleClickGo}
                    >
                      Go!
                    </button>
                  </div>
                </div>
              </div>
              {/* End:: Form */}
            </div>
          </div>
        </div>
        <div className="container tw-mt-auto tw-relative tw-text-white">
          <div className="row">
            <div className="col-xl-12 text-center">
              <ul className="list-inline tw-bg-[#F1F1F1] tw-inline-flex tw-mx-auto tw-px-[1rem_!important] mb-0 tw-rounded-t-md custom-tab-nav">
                <li className="list-inline-item">
                  <a
                    href="#"
                    className={
                      option == 1
                        ? "active tw-inline-flex tw-uppercase tw-flex-col tw-text-[#464646] tw-font-bold tw-no-underline tw-p-4"
                        : "tw-inline-flex tw-uppercase tw-flex-col tw-text-[#464646] tw-font-bold tw-no-underline tw-p-4"
                    }
                    onClick={(e) => handleOption(e, 1)}
                  >
                    <span>
                      <FaFax />
                    </span>
                    <span>Get an estimate</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    className={
                      option != 1
                        ? "active tw-inline-flex tw-uppercase tw-flex-col tw-text-[#464646] tw-font-bold tw-no-underline tw-p-4"
                        : "tw-inline-flex tw-uppercase tw-flex-col tw-text-[#464646] tw-font-bold tw-no-underline tw-p-4"
                    }
                    onClick={(e) => handleOption(e, 2)}
                  >
                    <span>
                      <FaCircleInfo />
                    </span>
                    <span>ask an expert</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderForm;
