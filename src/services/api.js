import axios from "axios";

const API_CHART_URL = "/chart";
const API_ALL_GENRES_URL = "/genre";
const API_SEARCH_URL = "/search";

export const loadCharts = async () => {
  try {
    const data = await axios(API_CHART_URL);

    if (!data.data) throw Error();

    return data.data;
  } catch (err) {
    throw Error("Failed to load chart!");
  }
};

export const loadGenres = async () => {
  try {
    const data = await axios(API_ALL_GENRES_URL);

    if (!data.data.data) throw Error();

    return data.data.data.filter((genre) => genre.name.toLowerCase() !== "all");
  } catch (err) {
    throw Error("Failed to load genres!");
  }
};

export const search = async (searchQuery) => {
  try {
    const data = await axios(`${API_SEARCH_URL}?q=${searchQuery}`);

    if (!data.data.data) throw Error();

    return data.data.data;
  } catch (err) {
    throw Error("Failed to load tracks!");
  }
};
