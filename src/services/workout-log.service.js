import { $axios } from '../api'

class WorkoutLogService {
	async create(body) {
		return await $axios.post(`/workout/log/:id`, body)
	}

	async getAll() {
		return await $axios.get(`/exercises/log`)
	}

	async getById(id) {
		return await $axios.get(`/exercises/${id}`)
	}
}

export default new WorkoutLogService()
