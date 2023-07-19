import { FaFax, FaCircleInfo } from "react-icons/fa6";

const HeaderForm = ({ background }) => {
  return (
    <>
      <div className="tw-pt-24 lg:tw-min-h-[600px] tw-bg-cover tw-bg-center tw-relative tw-flex tw-w-full tw-items-center tw-flex-col" style={{ backgroundImage: `url('${background}')` }}>
        <div className="tw-bg-[rgba(17,17,17,0.45)] tw-absolute tw-left-0 tw-top-0 tw-bottom-0 tw-right-0"></div>
        <div className="container text-center tw-relative tw-text-white tw-flex tw-h-full tw-flex-1">
          <div className="row tw-w-full">
            <div className="col-xl-8 offset-lg-2 tw-mb-5">
              {/* Start:: Estimate Form */}
              <div className="tw-mt-12 ">
                <h1 className="text-center tw-text-7xl tw-font-bold tw-my-5">
                  Get an Estimate!
                </h1>
                <div className="tw-bg-[rgba(0,0,0,.25)] tw-p-5 tw-rounded-md">
                  <div className="input-group input-group-lg">
                    <select className="form-select">
                      <option selected>Project Type...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <input type="text" className="form-control" placeholder="Zip" />
                    <button className="btn btn-primary" type="button">Go!</button>
                  </div>
                </div>
              </div>
              {/* Start:: Expert Form */}
              <div className="tw-mt-12 tw-hidden">
                <h1 className="text-center tw-text-7xl tw-font-bold tw-my-5">
                Ask an Expert
                </h1>
                <div className="tw-bg-[rgba(0,0,0,.25)] tw-p-5 tw-rounded-md">
                  <div className="input-group input-group-lg">
                    <select className="form-select">
                      <option selected>Category...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <input type="text" className="form-control" placeholder="Ask" />
                    <button className="btn btn-primary" type="button">Go!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container tw-mt-auto tw-relative tw-text-white">
          <div className="row">
            <div className="col-xl-12 text-center">
              <ul className="list-inline tw-bg-[#F1F1F1] tw-inline-flex tw-mx-auto tw-px-[1rem_!important] mb-0 tw-rounded-t-md custom-tab-nav">
                <li className="list-inline-item">
                  <a href="#" className='active tw-inline-flex tw-uppercase tw-flex-col tw-text-[#464646] tw-font-bold tw-no-underline tw-p-4'>
                    <span>
                      <FaFax />
                    </span>
                    <span>Get an estimate</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className='tw-inline-flex tw-uppercase tw-flex-col tw-text-[#464646] tw-font-bold tw-no-underline tw-p-4'>
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
  )
}

export default HeaderForm