import axios from 'axios'

export const Client =  axios.create({
  baseURL: 'http://pmarp.com:5000'
});

export const fetchUsers = async () => {
    return await Client.get('/users', {})
}

