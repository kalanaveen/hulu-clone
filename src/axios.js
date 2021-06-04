import axios from 'axios';

// base url to make request to movie database 

const instance = axios.create({
    baseURL:"tmbd url"
});

export default instance;
