import { $axios } from '../api'

class ExerciseService {
	async create(body) {
		return await $axios.post(`/exercises`, body)
	}

	async getAll() {
		return await $axios.get(`/exercises`)
	}
}

export default new ExerciseService()
