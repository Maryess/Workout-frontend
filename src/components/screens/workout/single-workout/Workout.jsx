import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useNavigate, useParams } from 'react-router-dom'
import stylesLayout from '../../../layout/Layout.module.scss'
import Header from '../../../layout/header/Header'
import styles from '../Workout.module.scss'
import WorkoutService from '/src/services/workout.service'

const Workout = () => {
	const { id } = useParams()

	const navigate = useNavigate()

	const { data } = useQuery(['get workout', id], () =>
		WorkoutService.getById(id)
	)
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
				<h1>{data?.data.name}</h1>
			</div>
			<div>
				{data?.data.exercises.map(exercise => (
					<div key={exercise.id}>
						<button
							className={styles.navigate_exercise}
							onClick={() => {
								navigate(`/exercises/${exercise.id}`)
							}}
						>
							{exercise.name}
						</button>
					</div>
				))}
			</div>
		</>
	)
}

export default Workout
