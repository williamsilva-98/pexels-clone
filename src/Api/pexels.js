const BASE_URL = "https://api.pexels.com/v1";
const API_KEY = "563492ad6f91700001000001ee51c25f13714fdbba56913ea42f2d82";

const PexelsApi = {
  getCurated: async (max) => {
    const res = await fetch(`${BASE_URL}/curated?per_page=${max}`, {
      headers: {
        Authorization: API_KEY,
      },
    });
    console.log(res);
    const data = await res.json();
    return data;
  }
};

export default PexelsApi;
