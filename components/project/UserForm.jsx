"use client";

import { FaChevronLeft, FaEnvelope } from "react-icons/fa6";

import { useEffect, useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const UserForm = ({ data, handleData, toggleForms, isSaving, setIsSaving }) => {
  const [error, setError] = useState(null);
  const [apiErrors, setApiErrors] = useState({
    email: "",
    userName: "",
  });
  const schema = Yup.object().shape({
    userName: Yup.string()
      .required("Username is required.")
      .min(5)
      .max(20)
      .matches(
        /^(?=[a-zA-Z0-9._]{5,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
        "Username must not contain special characters."
      ),
    email: Yup.string()
      .email("Invalid email address.")
      .required("Enter your email address."),
  });

  const handleSubmitUserForm = async (values) => {
    setIsSaving(true);
    setApiErrors({ email: "", userName: "" });
    const res = await fetch("/api/handyman/check", {
      method: "POST",
      body: JSON.stringify(values),
    });
    const result = await res.json();
    if (!result.isAccountExists) {
      handleData(values);
    } else {
      if (result.email) {
        setApiErrors((prevApiErrors) => ({
          ...prevApiErrors,
          email: result.email,
        }));
      }
      if (result.userName) {
        setApiErrors((prevApiErrors) => ({
          ...prevApiErrors,
          userName: result.userName,
        }));
      }
    }
    setIsSaving(false);
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={schema}
      enableReinitialize={true}
      onSubmit={async (values, { setSubmitting }) => {
        setError("");
        if (values.isAgreedToTermsAndCondition.length < 1) {
          setError("You must agree to our terms and condition.");
        } else {
          setTimeout(() => handleSubmitUserForm(values), 500);
        }
      }}
      validateOnChange={true}
    >
      {(formik) => (
        <Form>
          <div className="">
            <div className="row">
              <div className="col-xl-6 mb-3">
                <label htmlFor="" className="col-form-label">
                  <span className="required small">Public Username</span>
                </label>
                {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
                <Field name="userName" className="form-control" type="text" />
                {formik.errors.userName && formik.touched.userName ? (
                  <ErrorMessage
                    name="userName"
                    component="small"
                    className="text-danger"
                  />
                ) : null}
                {apiErrors.userName && (
                  <small className="text-danger">{apiErrors.userName}</small>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 mb-3">
                <label htmlFor="" className="col-form-label">
                  <span className="required small">Email Address</span>
                </label>
                {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
                <Field name="email" className="form-control" type="text" />
                {formik.errors.email && formik.touched.email ? (
                  <ErrorMessage
                    name="email"
                    component="small"
                    className="text-danger"
                  />
                ) : null}
                {apiErrors.email && (
                  <small className="text-danger">{apiErrors.email}</small>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 mb-3">
                <div className="mb-3 form-check">
                  {/* Note:: To trigger error message add class "is-invalid" to the form tag */}
                  <Field
                    className="form-check-input"
                    name="isAgreedToTermsAndCondition"
                    type="checkbox"
                    value="1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    I Accept And Agree To The <a href="">Terms & Condition.</a>
                  </label>
                  {error && (
                    <div>
                      <small className="text-danger">{error}</small>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Start:: Form Action */}
            <div className="tw-bg-[#f5f5f5] tw-border-0 tw-border-t tw-border-solid tw-border-[#e5e5e5] tw-py-4 tw-px-8 tw-mb-[-1rem] tw-mx-[-1rem]">
              <div className="row">
                <div className="col-xl-12 tw-flex tw-justify-between">
                  <div className="">
                    <button
                      className="btn btn-light border"
                      type="button"
                      onClick={() => toggleForms("project")}
                    >
                      <span className="tw-mr-1">
                        <FaChevronLeft />
                      </span>
                      Back
                    </button>
                  </div>
                  <div className="">
                    <button type="submit" className="btn btn-primary ">
                      <span className="tw-mr-2">
                        <FaEnvelope />
                      </span>
                      {!isSaving ? "Get Free Estimate" : "Saving..."}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
