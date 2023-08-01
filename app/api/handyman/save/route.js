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
    params.append('project_type_id',data.projectTypeId)
    params.append('description',data.projectDesc)
    params.append('start_date',data.projectStartDate)
    params.append('status_for_project',data.projectStatus)
    params.append('time_frame',data.projectTimeFrame)
    params.append('owned_property',data.isProjectOwner)
    params.append('address',data.address)
    params.append('state_id',data.stateId)
    params.append('city',data.city)
    params.append('zipcode',data.zip)
    params.append('budget',data.projectBudget)
    
    const res = await axios.post(url,params)

    const result = res.data

    console.log(result);

    return new Response(JSON.stringify(result.data), { status: 201 })
  } catch (error) {
    console.log("Error: ", error);
  }

}
