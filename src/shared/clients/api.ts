import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://lit-bakcend-production.up.railway.app',
}
)