import { headers } from "next/headers";
import axios from "axios";
let DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL;

export function getDomain() {
  const headersList = headers();
  const referrer = headersList.get("host");
  const domainName = referrer.includes("localhost")
    ? DOMAIN
    : referrer.replace("www.", "");
  return domainName;
}

export async function getData() {
  const domain = getDomain();
  const url =
    process.env.CONTRIB_API1 +
    `domains/getdomainconfig?domain=${domain}&key=${process.env.CONTRIB_API_KEY}`;
  const res = await axios.get(url);

  return res.data;
}

export async function getTopsites() {
  const domain = getDomain();
  const url =
    process.env.CONTRIB_API1 +
    `domains/getTopsites?domain=${domain}&key=${process.env.CONTRIB_API_KEY}`;
  const res = await axios.get(url);

  return res.data;
}

export async function getProjectTypes() {
  try {
    const url = process.env.HANDYMAN_API + `getHandymanConfigs`;
    const res = await axios.get(url);

    return res.data;
  } catch (error) {
    console.log("Error: ", error);
  }
}
