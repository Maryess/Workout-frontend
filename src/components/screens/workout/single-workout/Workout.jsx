import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { Fragment } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import WorkoutLogService from '../../../../services/workout/workout-log.service'
import stylesLayout from '../../../layout/Layout.module.scss'
import Header from '../../../layout/header/Header'
import Exercises from '../../exercise/Exercises'
import styles from '../Workout.module.scss'
const Workout = () => {
	const navigate = useNavigate()
	const { id } = useParams()

	const { data, isSuccess } = useQuery(['get workout', id], () =>
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
				<Header backlink={isSuccess && '/workouts'} />
				<h1 className={stylesLayout.heading}>{data?.data.workout.name}</h1>
			</div>
			<div className={styles.main}>
				<div className={styles.workouts}>
					{data?.data.logExercises.map((logExercise, index) => (
						<Fragment key={logExercise.id}>
							<Exercises exercise={logExercise} />
							{index % 2 !== 0 &&
								index !== data?.data.logExercises.length - 1 && (
									<div className={styles.line}></div>
								)}
						</Fragment>
					))}
				</div>
			</div>
		</>
	)
}

export default Workout
