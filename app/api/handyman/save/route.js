import axios from "axios";

export const POST = async (request) => {
  const data = await request.json()
  const url = process.env.HANDYMAN_API + `SaveProject`;
  // console.log(data)
  try {
    const params = new URLSearchParams()
    params.append('firstname',data.firstName)
    params.append('lastname',data.lastName)
    params.append('email',data.email)
    params.append('phone_number',data.phoneNumber)
    params.append('username',data.userName)
    params.append('projecttype',data.projectTypeId)
    params.append('projectdesc',data.projectDesc)
    params.append('projectstart',data.projectStartDate)
    params.append('projectstatus',data.projectStatus)
    params.append('projecttimeframe',data.projectTimeFrame)
    params.append('won_pro',data.isProjectOwner)
    params.append('projectaddress',data.address)
    params.append('projectstate',data.stateId)
    params.append('city',data.city)
    params.append('zip_code',data.zip)
    params.append('projectbudget',data.projectBudget)
    
    const res = await axios.post(url,params)

    const result = res.data

    console.log(result);

    return new Response(JSON.stringify(result.data), { status: 201 })
  } catch (error) {
    console.log("Error: ", error);
  }

}
