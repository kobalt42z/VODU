import axios from "axios";
import { API_KEY, BASE_URL, DPOPULARITY, LANGUAGE, MULTI_SEARCH, PAGE, QUERY } from "../constant/constant";

export const search = async (query, page) => {
    try {
        const response = await axios.get(
            BASE_URL + MULTI_SEARCH + API_KEY + LANGUAGE + QUERY +query + PAGE + page + DPOPULARITY)
        return response.data
        // [] of movies and
    } catch (error) {
        console.log(error)
        return error
    }
}
