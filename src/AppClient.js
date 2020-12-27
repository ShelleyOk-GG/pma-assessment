import axios from 'axios'

export const Client =  axios.create({
  baseURL: 'http://pmarp.com:5000',
  responseType: 'json',
});

export const fetchUsers = async () => {
    return await Client.get('/users', {responseType: 'json'})
}

