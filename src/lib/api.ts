import axios, { AxiosRequestConfig } from 'axios'

const API_URL = `https://api.themoviedb.org/3`
const defaultParams: AxiosRequestConfig = {
	responseType: 'json',
	baseURL: `${API_URL}`
}

export default axios.create(defaultParams)

