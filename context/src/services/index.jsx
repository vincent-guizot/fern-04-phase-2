import axios from "axios";

const URL = "http://localhost:3000";

const fetchContents = async () => {
  return await axios({
    method: "GET",
    url: `${URL}/contents`,
  })
    .then((results) => {
      return results.data;
    })
    .catch((err) => {
      return err;
    });
};

export { fetchContents };
