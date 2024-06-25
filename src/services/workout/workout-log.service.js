import { $axios } from '../../api'

class WorkoutLogService {
	async create(workoutId) {
		return await $axios.post(`/workouts/log/${workoutId}`)
	}

	async getAll() {
		return await $axios.get(`/workouts/log`)
	}

	async getById(id) {
		return await $axios.get(`/workouts/log/${id}`)
	}

	async deleteAll() {
		return await $axios.delete(`/workouts/log`)
	}

	async deleteById(id) {
		return await $axios.delete(`/workouts/log/${id}`)
	}

	async complete(id) {
		return await $axios.patch(`/workouts/log/complete/${id}`)
	}
}

export default new WorkoutLogService()
