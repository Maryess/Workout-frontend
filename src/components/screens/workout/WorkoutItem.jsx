import { useQueryClient } from '@tanstack/react-query'
import { RiDeleteBin5Line } from 'react-icons/ri'
import styles from './Workout.module.scss'

const WorkoutItem = ({ workout, mutate, deleteWorkout }) => {
	const queryClient = useQueryClient()

	return (
		<>
			<div className={styles.button}>
				<button
					aria-label='Create new workout'
					onClick={() => {
						mutate(workout.id)
						console.log(workout.logWorkout.id)
					}}
				>
					<span> {workout.name} </span>
					<RiDeleteBin5Line
						fontSize={25}
						onClick={() => {
							deleteWorkout(workout.id)
							queryClient.invalidateQueries(['get workouts', '/workouts'])
						}}
					/>
				</button>
			</div>
		</>
	)
}

export default WorkoutItem
