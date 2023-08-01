import axios from "axios";

export const POST = async (request) => {
  const data = await request.json()
  const url = process.env.HANDYMAN_API + `CheckIfAccountExists`;
  // console.log(data)
  try {
    const params = new URLSearchParams()
    params.append('email',data.email)
    params.append('userName',data.userName)

    const res = await axios.post(url,params)

    const result = res.data

    return new Response(JSON.stringify(result.data), { status: 201 })
  } catch (error) {
    console.log("Error: ", error);
  }

}