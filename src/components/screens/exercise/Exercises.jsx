import { useNavigate } from 'react-router-dom'
import styles from '../workout/Workout.module.scss'
const Exercises = ({ exercise }) => {
	const navigate = useNavigate()

	return (
		<>
			<div className={styles.button}>
				<button
					aria-label='Move to exercise'
					onClick={() => {
						navigate(`/exercises/${exercise.id}`)
					}}
				>
					<span>{exercise.exercise.name}</span>

					<img src={exercise.exercise.iconPath} alt='' />
				</button>
			</div>
		</>
	)
}

export default Exercises
