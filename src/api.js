import axios from 'axios'
import Cookies from 'js-cookie'

const API_URL = 'http://192.168.0.102:3000/api'

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get('work') ? `Bearer ${Cookies.get('work')}` : ''
	}
})
