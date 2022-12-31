import axios from "axios";

const instance = axios.create({
    baseURL: "https://shazam-core.p.rapidapi.com/v1",
})

const options = {
    headers: {
      'X-RapidAPI-Key': 'bb293ec4admshec48447b6602da7p1f57efjsnc65e6a61b3c0',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
};

export {options};

export default instance;