import { $axios } from '../api'

class ExerciseService {
	async create(name, times) {
		return await $axios.post(`/exercises`, {
			name,
			times
		})
	}
}

export default new ExerciseService()
