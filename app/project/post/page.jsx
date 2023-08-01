"use client";

import Navigation from "@/components/includes/Navigation";
import Footer from "@/components/includes/Footer";
import ProjectForm from "@/components/project/ProjectForm";
import UserForm from "@/components/project/UserForm";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { HandymanContext } from "@/app/context/handyman/store";

const page = () => {
  const background = "https://cdn.vnoc.com/background/bg-handyman1.png";
  const domain = "javapoint.com";
  const fb_url = "facebook.com";
  const twitter_url = "twitter.com";
  const linkedin_url = "linkedin.com";

  const router = useRouter();
  const { handymanConfigs } = useContext(HandymanContext);

  const [projectData, setProjectData] = useState({
    projectTypeId: "65",
    zip: "80001",
    firstName: "Stephen",
    lastName: "Catacte",
    phoneNumber: "123-456-7890",
    city: "New York City",
    address: "New York City",
    stateId: "35",
    projectStartDate: "2-Weeks",
    projectStatus: "Planning and Budgeting",
    projectTimeFrame: "Timing is Flexible",
    projectBudget: "$2500 to $5000",
    projectDesc: "This is a test",
    isProjectOwner: "1",
  });
  const [userData, setUserData] = useState({
    userName: "teepin12",
    email: "homer@mailinator.com",
    isAgreedToTermsAndCondition: [],
  });
  // const [projectData, setProjectData] = useState({
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
  // });
  // const [userData, setUserData] = useState({
  //   userName: "",
  //   email: "",
  //   isAgreedToTermsAndCondition: [],
  // });
  const [form, setForm] = useState("project");
  const [apiErrors, setApiErrors] = useState({
    email: "",
    userName: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleProjectData = (values) => {
    setProjectData(values);
    toggleForms("user");
  };

  const handleUserData = (values) => {
    setUserData(values);
    checkIfAccountExists();
  };

  const toggleForms = (form) => {
    setForm(form);
  };

  const saveProject = async () => {
    const apiData = Object.assign(userData, projectData);

    const res = await fetch("/api/handyman/save", {
      method: "POST",
      body: JSON.stringify(apiData),
    });

    const result = await res.json();

    if (result.success) {
      router.push("https://handyman.com/");
    }

    console.log(result);
  };

  const checkIfAccountExists = async () => {
    setIsSaving(true);
    setApiErrors({ email: "", userName: "" });

    const res = await fetch("/api/handyman/check", {
      method: "POST",
      body: JSON.stringify(userData),
    });
    const result = await res.json();

    if (!result.isAccountExists) {
      saveProject();
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

  useEffect(() => {
    if (handymanConfigs == null) {
      router.push("/");
    }
    // console.log(projectData);
    // console.log(userData);
  }, [projectData, userData]);

  return (
    <>
      <Navigation bgNavbar="tw-bg-[#333]" />
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
                    apiErrors={apiErrors}
                    isSaving={isSaving}
                  />
                )}
              </div>
            </div>
            <div className="col-xl-4">
              <div className="alert alert-info">
                <strong>Dear Clients,</strong> <br />
                <p>
                  First you will need to fill out this form, describing what
                  needs to be done. Once your Project is approved and posted on
                  the site, relevant Business people will be alerted.
                  You&apos;ll receive email alerts when your Project starts
                  getting interest and you&apos;ll then compare Contractor by
                  reviewing profiles, work history, qualifications and customer
                  reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer
        domain={domain}
        fb_url={fb_url}
        twitter_url={twitter_url}
        linkedin_url={linkedin_url}
      />
    </>
  );
};

export default page;
