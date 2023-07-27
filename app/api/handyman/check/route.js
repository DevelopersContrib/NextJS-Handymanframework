import axios from "axios";

export const POST = async (request) => {
  const data = await request.json()
  const url = process.env.HANDYMAN_API + `checkexists`;
  // console.log(data)
  try {
    const params = new URLSearchParams()
    params.append('field','email')
    params.append('value',data.email)
    console.log('params',params)
    const res = await axios.post(url,params)
    // console.log('url',process.env.HANDYMAN_API)
    console.log(url)
    // console.log('res',res.data)

    return new Response(JSON.stringify(res.data), { status: 201 })
  } catch (error) {
    console.log("Error: ", error);
  }

}