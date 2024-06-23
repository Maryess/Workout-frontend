import { RiDeleteBin5Line } from 'react-icons/ri'
import stylesField from '../../ui/field/Field.module.scss'
import styles from './Workout.module.scss'
const Workouts = ({ workout, mutate, deleteWorkout }) => {
	return (
		<>
			<div className={styles.workouts}>
				<button
					className={stylesField.input}
					onClick={() => {
						mutate(workout.id)
					}}
				>
					{workout.name}
					<RiDeleteBin5Line
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
