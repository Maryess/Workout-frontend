import cn from 'clsx'
import { useNavigate } from 'react-router-dom'
import styles from '../workout/Workout.module.scss'

const ExerciseItem = ({ exercise }) => {
	const navigate = useNavigate()

	return (
		<>
			<div
				className={
					exercise.isCompleted
						? cn(styles.completed, styles.button)
						: styles.button
				}
			>
				{!exercise.isCompleted ? (
					<button
						aria-label='Move to exercise'
						onClick={() => {
							navigate(`/exercises/${exercise.id}`)
						}}
					>
						<span>{exercise.exercise.name}</span>

						<img src={exercise.exercise.iconPath} alt='' />
					</button>
				) : (
					<>
						<button disabled>
							<span>{exercise.exercise.name}</span>
						</button>
					</>
				)}
			</div>
		</>
	)
}

export default ExerciseItem
