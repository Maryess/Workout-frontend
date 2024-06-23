import cn from 'clsx'
import { useNavigate } from 'react-router-dom'
import stylesLayout from '../../../layout/Layout.module.scss'
import Header from '../../../layout/header/Header'
import styles from '../Workout.module.scss'
import { useWorkouts } from '../hooks/useWorkouts'

const Workout = () => {
	const navigate = useNavigate()
	const { data } = useWorkouts()

	console.log(data?.data)
	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/workouts-bg.jpg')`,
					height: 280,
					borderRadius: '0 0 23px 23px'
				}}
			>
				<Header />
				<h1>{data?.data.workout.name}</h1>
			</div>
			<div>
				{data?.data.logExercises.map(exercise => (
					<div key={exercise.id}>
						<button
							className={styles.navigate_exercise}
							onClick={() => {
								navigate(`/exercises/${exercise.id}`)
							}}
						>
							hi
						</button>
					</div>
				))}
			</div>
		</>
	)
}

export default Workout
