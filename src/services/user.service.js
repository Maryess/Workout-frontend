import { $axios } from '../api'

class UserService {
	async getName() {
		try {
			const { data } = await $axios.get(`/users`, { params: { id: 14 } })

			return data
		} catch (error) {
			throw new Error(error)
		}
	}
}

export default new UserService()
