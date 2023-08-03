import Navigation from "@/components/includes/Navigation";
import Footer from "@/components/includes/Footer";
import Form from "@/components/project/Form";

import { getDomain } from "@/lib/data";

const Page = () => {
  const background = "https://cdn.vnoc.com/background/bg-handyman1.png";
  const domain = getDomain();
  const fb_url = "facebook.com";
  const twitter_url = "twitter.com";
  const linkedin_url = "linkedin.com";

  return (
    <>
      <Navigation bgNavbar="tw-bg-[#333]" domain={domain} />
      <Form domain={domain} />
      <Footer
        domain={domain}
        fb_url={fb_url}
        twitter_url={twitter_url}
        linkedin_url={linkedin_url}
      />
    </>
  );
};

export default Page;
