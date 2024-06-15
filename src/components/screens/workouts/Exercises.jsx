import { Link } from 'react-router-dom'
import './Workouts.module.scss'
import { exercises } from './exercises-list'
const Exercises = () => {
	return (
		<div className='exercise'>
			Exercises
			{exercises.map((exercise, index) => (
				<button key={`_exercise_${index}`}>
					<Link to={exercise.link}>{exercise.name}</Link>
				</button>
			))}
		</div>
	)
}

export default Exercises
