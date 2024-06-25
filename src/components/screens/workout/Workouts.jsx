import { useQueryClient } from '@tanstack/react-query'
import { RiDeleteBin5Line } from 'react-icons/ri'
import styles from './Workout.module.scss'
const Workouts = ({ workout, mutate, deleteWorkout }) => {
	const queryClient = useQueryClient()

	return (
		<>
			<div className={workout.isCompleted ? styles.completed : styles.button}>
				<button
					aria-label='Create new workout'
					onClick={() => {
						mutate(workout.id)
					}}
				>
					<span> {workout.name} </span>
					<RiDeleteBin5Line
						fontSize={25}
						onClick={() => {
							deleteWorkout(workout.id)
							queryClient.invalidateQueries('get workouts')
						}}
					/>
				</button>
			</div>
		</>
	)
}

export default Workouts
