import axios from "axios";

const MOCK_CONFIGS = {
  data: {
    projectTypes: [
      { projectTypeId: 1,  name: "General Handyman" },
      { projectTypeId: 2,  name: "Plumbing" },
      { projectTypeId: 3,  name: "Electrical" },
      { projectTypeId: 4,  name: "Carpentry" },
      { projectTypeId: 5,  name: "Painting" },
      { projectTypeId: 6,  name: "Flooring" },
      { projectTypeId: 7,  name: "Roofing" },
      { projectTypeId: 8,  name: "HVAC" },
      { projectTypeId: 9,  name: "Landscaping" },
      { projectTypeId: 10, name: "Cleaning" },
    ],
  },
};

export const GET = async (request) => {
  try {
    const url = process.env.HANDYMAN_API + `getHandymanConfigs`;
    const res = await axios.get(url);
    return new Response(JSON.stringify(res.data), { status: 201 });
  } catch (error) {
    console.warn("Handyman API unavailable — using mock data:", error.message);
    return new Response(JSON.stringify(MOCK_CONFIGS), { status: 200 });
  }
}