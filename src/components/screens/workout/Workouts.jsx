import { RiDeleteBin5Line } from 'react-icons/ri'
import styles from './Workout.module.scss'
const Workouts = ({ workout, mutate, deleteWorkout }) => {
	return (
		<>
			<div className={styles.button}>
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
						}}
					/>
				</button>
			</div>
		</>
	)
}

export default Workouts
