import axios from "axios";

export const GET = async (request) => {
  try {
    const url = process.env.HANDYMAN_API + `getHandymanConfigs`;
    const res = await axios.get(url)

    console.log(res.data.data)

    return new Response(JSON.stringify(res.data), { status: 201 })
  } catch (error) {
    console.log("Error: ", error);
  }
}