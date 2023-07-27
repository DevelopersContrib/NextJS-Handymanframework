import axios from "axios";

export const POST = async (request) => {
  const data = request.json()
  // console.log('Request:',request)
  const url = process.env.HANDYMAN_API + `checkexists`;
  console.log(data)
  try {
    params = new URLSearchParams()
    params.append('field','email')
    params.append('value','data.email')

    const res = await axios.get(url)
    console.log(process.env.HANDYMAN_API)
    console.log(url)
    console.log(res)

    return new Response(JSON.stringify(res.data), { status: 201 })
  } catch (error) {
    console.log("Error: ", error);
  }
}