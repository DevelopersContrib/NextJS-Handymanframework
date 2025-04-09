import { headers } from "next/headers";
import axios from "axios";

export async function getDomain() {
  try {
    const headersList = headers();
    const referrer = headersList.get("host") || "handyman.com";

    const domainName = referrer.includes("localhost")
      ? process.env.NEXT_PUBLIC_VERCEL_URL || "handyman.com"
      : referrer.replace(/^www\./, "");

    return domainName;
  } catch (error) {
    console.warn("[getDomain] No request context available. Using fallback.");
    return process.env.NEXT_PUBLIC_VERCEL_URL || "handyman.com";
  }
}

export async function getData() {
  const domain = await getDomain();
  const url = `${process.env.CONTRIB_API1}domains/getdomainconfig?domain=${domain}&key=${process.env.CONTRIB_API_KEY}`;

  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("[getData] Failed to fetch domain config:", error.message);
    return { data: { domainName: "Handyman", logo: null } };
  }
}

export async function getTopsites() {
  const domain = await getDomain();
  const url = `${process.env.CONTRIB_API1}domains/getTopsites?domain=${domain}&key=${process.env.CONTRIB_API_KEY}`;

  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("[getTopsites] Failed to fetch topsites:", error.message);
    return { data: [] };
  }
}

export async function getProjectTypes() {
  try {
    const url = `${process.env.HANDYMAN_API}getHandymanConfigs`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("[getProjectTypes] Failed to fetch project types:", error.message);
    return null;
  }
}
