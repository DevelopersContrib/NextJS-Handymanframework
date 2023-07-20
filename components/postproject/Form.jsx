import { FaChevronLeft, FaChevronRight, FaEnvelope } from "react-icons/fa6";

const Form = () => {
  return (
    <>
      <div className="tw-border tw-border-red-300 tw-border-solid tw-rounded tw-p-4">
        <div className="tw-border-0 tw-border-b tw-border-solid tw-border-gray-300/50 tw-mb-4">
          <h1 className="text-center tw-mb-4">Post a Project and Get <strong>Results</strong> Immediately</h1>
        </div>
        {/* Start:: First Form */}
        <div className="tw-hidden">
          <div className="row">
            <div className="col-xl-6 mb-3">
              <div className="row">
                <label htmlFor="" className="col-sm-5 col-form-label">
                  <span className="required small">Select Project Type</span>
                </label>
                <div className="col-sm-7">
                  {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
                  <select name="" id="" className="form-select ">
                    <option defaultValue="Select type...">Select type...</option>
                    <option value="">attic</option>
                    <option value="">attic</option>
                  </select>
                  <div className="invalid-feedback">
                    Project type is required.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mb-3">
              <div className="row">
                <label htmlFor="" className="col-sm-5 col-form-label">
                  <span className="required small">Zip code</span>
                </label>
                <div className="col-sm-7">
                  {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
                  <input type="text" className="form-control" />
                  <div className="invalid-feedback">
                    Zip code is required.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 mb-3">
              <div className="row">
                <label htmlFor="" className="col-sm-5 col-form-label">
                  <span className="required small">First Name</span>
                </label>
                <div className="col-sm-7">
                  {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
                  <input type="text" className="form-control" />
                  <div className="invalid-feedback">
                    First name is required.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mb-3">
              <div className="row">
                <label htmlFor="" className="col-sm-5 col-form-label">
                  <span className="required small">Last Name</span>
                </label>
                <div className="col-sm-7">
                  {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
                  <input type="text" className="form-control" />
                  <div className="invalid-feedback">
                    Last name is required.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 mb-3">
              <div className="row">
                <label htmlFor="" className="col-sm-5 col-form-label">
                  <span className="required small">Phone Number</span>
                </label>
                <div className="col-sm-7">
                  {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
                  <input type="text" className="form-control " />
                  <div className="form-text">10 digit number with area code</div>
                  <div className="invalid-feedback">
                    Phone number is required.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mb-3">
              <div className="row">
                <label htmlFor="" className="col-sm-5 col-form-label">
                  <span className="required small">City</span>
                </label>
                <div className="col-sm-7">
                  {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
                  <input type="text" className="form-control" />
                  <div className="invalid-feedback">
                    City is required.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 mb-3">
              <div className="row">
                <label htmlFor="" className="col-sm-5 col-form-label">
                  <span className="required small">Address</span>
                </label>
                <div className="col-sm-7">
                  {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
                  <textarea className="form-control" rows="2"></textarea>
                  <div className="invalid-feedback">
                    Address is required.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mb-3">
              <div className="row">
                <label htmlFor="" className="col-sm-5 col-form-label">
                  <span className="required small">State</span>
                </label>
                <div className="col-sm-7">
                  {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
                  <select name="" id="" className="form-select">
                    <option defaultValue="Select type...">Select type...</option>
                    <option value="">attic</option>
                    <option value="">attic</option>
                  </select>
                  <div className="invalid-feedback">
                    State is required.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 mb-3">
              <div className="row">
                <label htmlFor="" className="col-sm-5 col-form-label">
                  <span className="required small">Ideal Start Date </span>
                </label>
                <div className="col-sm-7">
                  {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
                  <select name="" id="" className="form-select">
                    <option defaultValue="Select type...">Select type...</option>
                    <option value="">attic</option>
                    <option value="">attic</option>
                  </select>
                  <div className="invalid-feedback">
                    Start date is required.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mb-3">
              <div className="row">
                <label htmlFor="" className="col-sm-5 col-form-label">
                  <span className="required small">Project Status</span>
                </label>
                <div className="col-sm-7">
                  {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
                  <select name="" id="" className="form-select">
                    <option defaultValue="Select type...">Select type...</option>
                    <option value="">attic</option>
                    <option value="">attic</option>
                  </select>
                  <div className="invalid-feedback">
                    Project status is required.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 mb-3">
              <div className="row">
                <label htmlFor="" className="col-sm-5 col-form-label">
                  <span className="required small">Completion Time Frame </span>
                </label>
                <div className="col-sm-7">
                  {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
                  <select name="" id="" className="form-select">
                    <option defaultValue="Select type...">Select type...</option>
                    <option value="">attic</option>
                    <option value="">attic</option>
                  </select>
                  <div className="invalid-feedback">
                    Time Frame is required.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mb-3">
              <div className="row">
                <label htmlFor="" className="col-sm-5 col-form-label">
                  <span className="required small">Project Budget</span>
                </label>
                <div className="col-sm-7">
                  {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
                  <select name="" id="" className="form-select">
                    <option defaultValue="Select type...">Select type...</option>
                    <option value="">attic</option>
                    <option value="">attic</option>
                  </select>
                  <div className="invalid-feedback">
                    Project budget is required.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 mb-3">
              <div className="row">
                <label htmlFor="" className="col-sm-3 col-form-label">
                  <span className="required small">Project Description </span>
                </label>
                <div className="col-sm-9">
                  {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
                  <textarea className="form-control" rows="3"></textarea>
                  <div className="invalid-feedback">
                    Project description required.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 mb-3">
              <div className="row">
                <label htmlFor="" className="col-sm-3 col-form-label">
                  <span className="required small">Do You Own the Property </span>
                </label>
                <div className="col-sm-9 tw-flex tw-items-center">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineRadio1">No</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" defaultChecked={true} />
                    <label className="form-check-label" htmlFor="inlineRadio2">Yes, Provide your project type</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Start:: Form Action */}
          <div className="tw-bg-[#f5f5f5] tw-border-0 tw-border-t tw-border-solid tw-border-[#e5e5e5] tw-py-4 tw-px-8 tw-mb-[-1rem] tw-mx-[-1rem]">
            <div className="row">
              <div className="col-xl-12 text-end">
                <button className="btn btn-primary ">
                  Continue to Get Free Esmtimates
                  <span className="tw-ml-1"><FaChevronRight /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Start:: Second Form */}
        <div className="">
          <div className="row">
            <div className="col-xl-6 mb-3">
              <label htmlFor="" className="col-form-label">
                <span className="required small">Public Username</span>
              </label>
              {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
              <input type="text" className="form-control" />
              <div className="invalid-feedback">
                Public Username is required.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 mb-3">
              <label htmlFor="" className="col-form-label">
                <span className="required small">Email Address</span>
              </label>
              {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
              <input type="text" className="form-control" />
              <div className="invalid-feedback">
                Email Address is required.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 mb-3">
              <div className="mb-3 form-check">
                {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">I Accept And Agree To The <a href="">Terms & Condition.</a></label>
                <div className="invalid-feedback">
                  You must accept and agree to terms and condition.
                </div>
              </div>
            </div>
          </div>
          {/* Start:: Form Action */}
          <div className="tw-bg-[#f5f5f5] tw-border-0 tw-border-t tw-border-solid tw-border-[#e5e5e5] tw-py-4 tw-px-8 tw-mb-[-1rem] tw-mx-[-1rem]">
            <div className="row">
              <div className="col-xl-12 tw-flex tw-justify-between">
                <div className="">
                  <button className="btn btn-light border">
                    <span className="tw-mr-1"><FaChevronLeft /></span>
                    Back
                  </button>
                </div>
                <div className="">
                  <button className="btn btn-primary ">
                    <span className="tw-mr-2"><FaEnvelope /></span>
                    Get Free Estimate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form