const BASE_URL = "https://api.pexels.com/v1";
const API_KEY = "563492ad6f91700001000001ee51c25f13714fdbba56913ea42f2d82";

const PexelsApi = {
  getCuratedPhoto: async () => {
    const res = await fetch(`${BASE_URL}/curated?per_page=1`, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const data = await res.json();
    return data;
  },
  getCuratedPhotos: async () => {
    const res = await fetch(`${BASE_URL}/curated?per_page=80`, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const data = await res.json();
    return data;
  },
};

export default PexelsApi;
