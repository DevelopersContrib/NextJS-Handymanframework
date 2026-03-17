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

const MOCK_TOPSITES = {
  data: {
    domains: [
      {
        domain: "handyman.com",
        logo: "https://placehold.co/240x64/1c1917/fbbf24?text=Handyman.com&font=montserrat",
        site_link: "https://handyman.com",
        brand_link: "https://handyman.com",
      },
      {
        domain: "plumber.com",
        logo: "https://placehold.co/240x64/1c1917/fbbf24?text=Plumber.com&font=montserrat",
        site_link: "https://plumber.com",
        brand_link: "https://plumber.com",
      },
      {
        domain: "electrician.com",
        logo: "https://placehold.co/240x64/1c1917/fbbf24?text=Electrician.com&font=montserrat",
        site_link: "https://electrician.com",
        brand_link: "https://electrician.com",
      },
      {
        domain: "roofer.com",
        logo: "https://placehold.co/240x64/1c1917/fbbf24?text=Roofer.com&font=montserrat",
        site_link: "https://roofer.com",
        brand_link: "https://roofer.com",
      },
      {
        domain: "painter.com",
        logo: "https://placehold.co/240x64/1c1917/fbbf24?text=Painter.com&font=montserrat",
        site_link: "https://painter.com",
        brand_link: "https://painter.com",
      },
      {
        domain: "landscaper.com",
        logo: "https://placehold.co/240x64/1c1917/fbbf24?text=Landscaper.com&font=montserrat",
        site_link: "https://landscaper.com",
        brand_link: "https://landscaper.com",
      },
    ],
  },
};

export async function getTopsites() {
  if (process.env.NODE_ENV === "development") {
    console.info("[getTopsites] Development mode — returning mock data.");
    return MOCK_TOPSITES;
  }

  const domain = await getDomain();
  const url = `${process.env.CONTRIB_API1}domains/getTopsites?domain=${domain}&key=${process.env.CONTRIB_API_KEY}`;

  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.warn("[getTopsites] API unavailable — using mock data:", error.message);
    return MOCK_TOPSITES;
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
