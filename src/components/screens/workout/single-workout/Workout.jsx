import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useNavigate, useParams } from 'react-router-dom'
import WorkoutLogService from '../../../../services/workout/workout-log.service'
import stylesLayout from '../../../layout/Layout.module.scss'
import Header from '../../../layout/header/Header'
import stylesField from '../../../ui/field/Field.module.scss'
import styles from '../Workout.module.scss'
const Workout = () => {
	const navigate = useNavigate()
	const { id } = useParams()

	const { data } = useQuery(['get workout', id], () =>
		WorkoutLogService.getById(id)
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
				<h1 className={stylesLayout.heading}>{data?.data.workout.name}</h1>
			</div>
			<div>
				{data?.data.logExercises.map(logExercise => (
					<div key={logExercise.id} className={styles.workouts}>
						<button
							className={stylesField.input}
							onClick={() => {
								navigate(`/exercises/${logExercise.id}`)
							}}
						>
							{logExercise.exercise.name}
						</button>
					</div>
				))}
			</div>
		</>
	)
}

export default Workout
