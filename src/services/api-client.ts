import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e91acb5964a14baeac8946242fa6240b",
  },
});
