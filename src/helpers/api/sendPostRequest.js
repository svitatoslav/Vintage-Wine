import axios from 'axios';

const sendPostRequest = (url, data) => {
  try {
    axios.post(url, data)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  } catch (err) {
    console.log(err);
  }
};

export default sendPostRequest;
