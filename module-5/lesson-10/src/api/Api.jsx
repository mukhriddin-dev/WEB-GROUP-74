import axios from "axios";

const BASE_URL = "https://task.samid.uz/v1";

export const URL = {
  login: (params) => {
   return  axios.post(`${BASE_URL}/user/sign-in`, params);
  },
};
