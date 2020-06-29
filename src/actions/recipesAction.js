import axios from "axios";
import { APP_ID, APP_KEY } from "../api/config";

export const getData = (query) => async (dispatch) => {
  try {
    dispatch({
      type: "AWAITING_RECIPES",
    });
    const response = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = response.data;
    dispatch({
      type: "SUCCESS_RECIPES",
      payload: data.hits,
    });
  } catch (e) {
    dispatch({
      type: "REJECTED_RECIPES",
    });
  }
};
