import { $axios } from '../api'

class WorkoutService {
	async create(body) {
		return await $axios.post(`/workouts`, body)
	}

	async getAll() {
		return await $axios.get(`/workouts`)
	}

	async getById(id) {
		return await $axios.get(`/workouts/${id}`)
	}
}

export default new WorkoutService()
