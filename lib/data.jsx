import { headers } from "next/headers";
import axios from "axios";
let DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL;

export async function getProjectTypes() {
  try {
    const url = process.env.HANDYMAN_API + `getHandymanConfigs`;
    const res = await axios.get(url);

    return res.data;
  } catch (error) {
    console.log("Error: ", error);
  }
}
