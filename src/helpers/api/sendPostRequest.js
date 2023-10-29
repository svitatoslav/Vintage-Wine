import axios from 'axios';

const sendPostRequest =  (url, data) => {

    // const res = await fetch(url, {
    //     method: 'POST',
    //     body: data
    // })

    // return await res.json();
    try {
        axios.post(url, data)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    } catch(err) {
        console.log(err);
    }
}

export default sendPostRequest;
