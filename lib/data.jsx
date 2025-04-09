import { headers } from "next/headers";
import axios from "axios";

export async function getDomain() {
  const headersList = headers();
  const referrer = headersList.get("host") || "handyman.com";

  const domainName = referrer.includes("localhost")
    ? process.env.NEXT_PUBLIC_VERCEL_URL || "handyman.com"
    : referrer.replace(/^www\./, "");

  return domainName;
}

export async function getData() {
  const domain = await getDomain();
  const url = `${process.env.CONTRIB_API1}domains/getdomainconfig?domain=${domain}&key=${process.env.CONTRIB_API_KEY}`;

  const res = await axios.get(url);
  return res.data;
}

export async function getTopsites() {
  const domain = await getDomain();
  const url = `${process.env.CONTRIB_API1}domains/getTopsites?domain=${domain}&key=${process.env.CONTRIB_API_KEY}`;

  const res = await axios.get(url);
  return res.data;
}

export async function getProjectTypes() {
  try {
    const url = `${process.env.HANDYMAN_API}getHandymanConfigs`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log("Error: ", error);
    return null;
  }
}
