import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://moviesapi.ir/api/v1/",
});

export default apiClient;
