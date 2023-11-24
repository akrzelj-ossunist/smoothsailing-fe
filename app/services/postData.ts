import axios from "axios";

const postData = async (values: any, route: string) => {
    try {
      const resp = await axios.post(
        `http://localhost:8080/${route}`,
        JSON.stringify(values),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Post request successful:", resp.data);
    } catch (error) {
      console.error(error);
    }
  };

  export default postData;