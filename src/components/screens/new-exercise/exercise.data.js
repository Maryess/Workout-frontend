import { workouts } from '../Workouts/workouts.data'

class Exercise {
	getAll() {
		workouts.map(() => {
			return console.log(workouts)
		})
	}

	create() {
		workouts.push({
			name: value
		})
	}

	update(id, body) {}

	delete(id) {
		id--
		workouts.map(() => {
			return delete workouts[id]
		})
	}
}

export default new Exercise()
