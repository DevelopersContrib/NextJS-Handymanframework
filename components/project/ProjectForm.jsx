"use client";
import { FaChevronRight } from "react-icons/fa6";

import { useContext, useState } from "react";
import { HandymanContext } from "@/app/context/handyman/store";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ProjectForm = ({ data, handleData }) => {
  const { handymanConfigs } = useContext(HandymanContext);
  // const [isLoading, setIsLoading] = useState(false);

  // const initialValues = {
  //   projectTypeId: "",
  //   zip: "",
  //   firstName: "",
  //   lastName: "",
  //   phoneNumber: "",
  //   city: "",
  //   address: "",
  //   stateId: "",
  //   projectStartDate: "",
  //   projectStatus: "",
  //   projectTimeFrame: "",
  //   projectBudget: "",
  //   projectDesc: "",
  //   isProjectOwner: "0",
  // };

  const schema = Yup.object().shape({
    projectTypeId: Yup.string().required("Select a project type."),
    zip: Yup.string()
      .matches(/^\d{5}(?:[-\s]\d{4})?$/, "Invalid zip code")
      .required("What is your zip code?"),
    firstName: Yup.string().required("What is your name?"),
    lastName: Yup.string().required("What is your surname?"),
    phoneNumber: Yup.string()
      .matches(
        /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        "Invalid phone number."
      )
      .required("Phone number is required."),
    city: Yup.string().required("Where do you lived?"),
    address: Yup.string().required("Where do you lived?"),
    stateId: Yup.string().required("What state do you live in?"),
    projectStartDate: Yup.string().required("When do you want to start?"),
    projectStatus: Yup.string().required("What is the project status?"),
    projectTimeFrame: Yup.string().required(
      "When do you want your project to be completed?"
    ),
    projectBudget: Yup.string().required("Enter your project budget."),
    projectDesc: Yup.string().required("Describe your project"),
  });

  return (
    <Formik
      initialValues={data}
      validationSchema={schema}
      enableReinitialize
      onSubmit={async (values, { setSubmitting }) => {
        setTimeout(() => handleData(values), 500);
      }}
      validateOnChange={true}
    >
      {(formik) => (
        <Form>
          <div className="">
            <div className="row">
              <div className="col-xl-6 mb-3">
                <div className="row">
                  <label htmlFor="" className="col-sm-5 col-form-label">
                    <span className="required small">Select Project Type</span>
                  </label>
                  <div className="col-sm-7">
                    {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
                    <Field
                      as="select"
                      className="form-select"
                      name="projectTypeId"
                    >
                      <option value="0"></option>
                      {handymanConfigs &&
                        handymanConfigs.projectTypes.map((p) => (
                          <option key={p.projectTypeId} value={p.projectTypeId}>
                            {p.name}
                          </option>
                        ))}
                    </Field>
                    {formik.errors.projectTypeId && formik.touched.zip ? (
                      <ErrorMessage
                        name="projectTypeId"
                        component="small"
                        className="text-danger"
                      />
                    ) : null}
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
                    <Field className="form-control" name="zip" type="text" />
                    {formik.errors.zip && formik.touched.zip ? (
                      <ErrorMessage
                        name="zip"
                        component="small"
                        className="text-danger"
                      />
                    ) : null}
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
                    <Field
                      className="form-control"
                      name="firstName"
                      type="text"
                    />
                    {formik.errors.firstName && formik.touched.firstName ? (
                      <ErrorMessage
                        name="firstName"
                        component="small"
                        className="text-danger"
                      />
                    ) : null}
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
                    <Field
                      className="form-control"
                      name="lastName"
                      type="text"
                    />
                    {formik.errors.lastName && formik.touched.lastName ? (
                      <ErrorMessage
                        name="lastName"
                        component="small"
                        className="text-danger"
                      />
                    ) : null}
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
                    <Field
                      className="form-control"
                      name="phoneNumber"
                      type="text"
                    />
                    <div className="form-text">
                      10 digit number with area code
                    </div>
                    {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                      <ErrorMessage
                        name="phoneNumber"
                        component="small"
                        className="text-danger"
                      />
                    ) : null}
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
                    <Field className="form-control" name="city" type="text" />
                    {formik.errors.city && formik.touched.city ? (
                      <ErrorMessage
                        name="city"
                        component="small"
                        className="text-danger"
                      />
                    ) : null}
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
                    <Field
                      as="textarea"
                      className="form-control"
                      name="address"
                      rows="2"
                    ></Field>
                    {formik.errors.address && formik.touched.address ? (
                      <ErrorMessage
                        name="address"
                        component="small"
                        className="text-danger"
                      />
                    ) : null}
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
                    <Field as="select" className="form-select" name="stateId">
                      <option value="0"></option>
                      {handymanConfigs &&
                        handymanConfigs.states.map((s) => (
                          <option key={s.stateId} value={s.stateId}>
                            {s.name}
                          </option>
                        ))}
                    </Field>
                    {formik.errors.stateId && formik.touched.stateId ? (
                      <ErrorMessage
                        name="stateId"
                        component="small"
                        className="text-danger"
                      />
                    ) : null}
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
                    <Field
                      as="select"
                      className="form-select"
                      name="projectStartDate"
                    >
                      <option value=""></option>
                      <option value="Now">Now</option>
                      <option value="1-Week">1-Week</option>
                      <option value="2-Weeks">2-Weeks</option>
                      <option value="3-Weeks">3-Weeks</option>
                      <option value="1-2 Months">1-2 Months</option>
                      <option value="3-6 Months">3-6 Months</option>
                    </Field>
                    {formik.errors.projectStartDate &&
                    formik.touched.projectStartDate ? (
                      <ErrorMessage
                        name="projectStartDate"
                        component="small"
                        className="text-danger"
                      />
                    ) : null}
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
                    <Field
                      as="select"
                      className="form-select"
                      name="projectStatus"
                    >
                      <option value=""></option>
                      <option value="Ready to Hire">Ready to Hire</option>
                      <option value="Planning and Budgeting">
                        Planning and Budgeting
                      </option>
                    </Field>
                    {formik.errors.projectStatus &&
                    formik.touched.projectStatus ? (
                      <ErrorMessage
                        name="projectStatus"
                        component="small"
                        className="text-danger"
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 mb-3">
                <div className="row">
                  <label htmlFor="" className="col-sm-5 col-form-label">
                    <span className="required small">
                      Completion Time Frame
                    </span>
                  </label>
                  <div className="col-sm-7">
                    {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
                    <Field
                      as="select"
                      className="form-select"
                      name="projectTimeFrame"
                    >
                      <option value=""></option>
                      <option value="Timing is Flexible">
                        Timing is Flexible
                      </option>
                      <option value="Less than 2 months">
                        Less than 2 months
                      </option>
                      <option value="More than 2 months">
                        More than 2 months
                      </option>
                    </Field>
                    {formik.errors.projectTimeFrame &&
                    formik.touched.projectTimeFrame ? (
                      <ErrorMessage
                        name="projectStatus"
                        component="small"
                        className="text-danger"
                      />
                    ) : null}
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
                    <Field
                      as="select"
                      className="form-select"
                      name="projectBudget"
                    >
                      <option value=""></option>
                      <option value="up to $500">up to $500</option>
                      <option value="$500 to $1000">$500 to $1000</option>
                      <option value="$1000 to $2500">$1000 to $2500</option>
                      <option value="$2500 to $5000">$2500 to $5000</option>
                      <option value="$5000 to $10000">$5000 to $10000</option>
                      <option value="$10000 to $25000">$10000 to $25000</option>
                      <option value="$25000 to $50000">$25000 to $50000</option>
                      <option value="$50000 to $100000">
                        $50000 to $100000
                      </option>
                      <option value="$100000 to $200000">
                        $100000 to $200000
                      </option>
                      <option value="$200000 +">$200000 +</option>
                    </Field>
                    {formik.errors.projectBudget &&
                    formik.touched.projectBudget ? (
                      <ErrorMessage
                        name="projectBudget"
                        component="small"
                        className="text-danger"
                      />
                    ) : null}
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
                    <Field
                      as="textarea"
                      className="form-select"
                      name="projectDesc"
                      rows="3"
                    ></Field>
                    {formik.errors.projectDesc && formik.touched.projectDesc ? (
                      <ErrorMessage
                        name="projectDesc"
                        component="small"
                        className="text-danger"
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 mb-3">
                <div className="row">
                  <label htmlFor="" className="col-sm-3 col-form-label">
                    <span className="required small">
                      Do You Own the Property
                    </span>
                  </label>
                  <div className="col-sm-9 tw-flex tw-items-center">
                    <div className="form-check form-check-inline">
                      <Field
                        className="form-check-input"
                        type="radio"
                        name="isProjectOwner"
                        value="0"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        No
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Field
                        className="form-check-input"
                        type="radio"
                        name="isProjectOwner"
                        value="1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Yes, Provide your project type
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tw-bg-[#f5f5f5] tw-border-0 tw-border-t tw-border-solid tw-border-[#e5e5e5] tw-py-4 tw-px-8 tw-mb-[-1rem] tw-mx-[-1rem]">
              <div className="row">
                <div className="col-xl-12 text-end">
                  <button className="btn btn-primary" type="submit">
                    Continue to Get Free Esmtimates
                    <span className="tw-ml-1">
                      <FaChevronRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProjectForm;
