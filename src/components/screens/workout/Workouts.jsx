import { RiDeleteBin5Line } from 'react-icons/ri'

const Workouts = ({ workout, mutate, deleteWorkout }) => {
	return (
		<>
			<div>
				<button
					onClick={() => {
						mutate(workout.id)
					}}
				>
					{workout.name}
				</button>
				<RiDeleteBin5Line
					onClick={() => {
						deleteWorkout(workout.id)
					}}
				/>
			</div>
		</>
	)
}

export default Workouts
