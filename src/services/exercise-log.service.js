import { $axios } from '../api'

class ExerciseLogService {
	async create(exerciseId) {
		return await $axios.post(`/exercises/log/${exerciseId}`)
	}

	async updateTime(timeId, body) {
		return await $axios.put(`/exercises/log/time/${timeId}`, body)
	}

	async complete(id, body) {
		return $axios.patch(`/exercises/log/${id}`, body)
	}

	async getAll() {
		return await $axios.get(`/exercises/log`)
	}

	async getById(id) {
		return await $axios.get(`/exercises/log/${id}`)
	}
}

export default new ExerciseLogService()
