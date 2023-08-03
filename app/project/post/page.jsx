import Form from "@/components/project/Form";

import { getDomain } from "@/lib/data";

const Page = () => {
  const background = "https://cdn.vnoc.com/background/bg-handyman1.png";
  const domain = getDomain();

  return (
    <>
      <Form domain={domain} />
    </>
  );
};

export default Page;
