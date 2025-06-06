"use client";

import ProjectForm from "@/components/project/ProjectForm";
import UserForm from "@/components/project/UserForm";

import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { HandymanContext } from "@/app/context/handyman/store";

const Form = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { handymanConfigs } = useContext(HandymanContext);

  const [projectData, setProjectData] = useState({
    projectTypeId: searchParams.get("project-type-id") ? searchParams.get("project-type-id") : "",
    zip: searchParams.get("zip") ? searchParams.get("zip") : "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
    address: "",
    stateId: "",
    projectStartDate: "",
    projectStatus: "",
    projectTimeFrame: "",
    projectBudget: "",
    projectDesc: "",
    isProjectOwner: "0",
  });
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    isAgreedToTermsAndCondition: [],
  });
  const [form, setForm] = useState("project");

  const [isSaving, setIsSaving] = useState(false);

  const handleProjectData = (values) => {
    setProjectData(values);
    toggleForms("user");
  };

  const handleUserData = (values) => {
    setUserData(values);
    // checkIfAccountExists();
  };

  const toggleForms = (form) => {
    setForm(form);
  };

  const saveProject = async () => {
    const apiData = Object.assign(userData, projectData);

    // console.log("apiData", apiData);

    const res = await fetch("/api/handyman/save", {
      method: "POST",
      body: JSON.stringify(apiData),
    });

    const result = await res.json();

    if (result.success) {
      router.push("https://handyman.com/");
      // alert("Saved!");
    }
  };

  useEffect(() => {
    if (handymanConfigs == null) {
      router.push("/");
    }

    if (userData.userName && userData.email) {
      saveProject();
    }
  }, [projectData, userData]);

  return (
    <>
      <section className="tw-mt-[56px]">
        <div className="page-container tw-py-8 tw-text-white">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <h1>Post a Project</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-12">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="tw-border tw-border-red-300 tw-border-solid tw-rounded tw-p-4">
                <div className="tw-border-0 tw-border-b tw-border-solid tw-border-gray-300/50 tw-mb-4">
                  <h1 className="text-center tw-mb-4">
                    Post a Project and Get <strong>Results</strong> Immediately
                  </h1>
                </div>
                {form === "project" ? (
                  <ProjectForm
                    data={projectData}
                    handleData={handleProjectData}
                    toggleForms={toggleForms}
                  />
                ) : (
                  <UserForm
                    data={userData}
                    handleData={handleUserData}
                    toggleForms={toggleForms}
                    // apiErrors={apiErrors}
                    isSaving={isSaving}
                    setIsSaving={setIsSaving}
                  />
                )}
              </div>
            </div>
            <div className="col-xl-4">
              <div className="alert alert-info">
                <strong>Dear Clients,</strong> <br />
                <p>
                  First you will need to fill out this form, describing what needs to be done. Once
                  your Project is approved and posted on the site, relevant Business people will be
                  alerted. You&apos;ll receive email alerts when your Project starts getting
                  interest and you&apos;ll then compare Contractor by reviewing profiles, work
                  history, qualifications and customer reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
