import { useQuery } from '@tanstack/react-query'
import { Fragment } from 'react'
import WorkoutService from '../../../services/workout/workout.service'
import Layout from '../../layout/Layout'
import Success from '../../ui/status/Success'
import styles from './Workout.module.scss'
import WorkoutItem from './WorkoutItem'
import { useDeleteWorkout } from './hooks/useDeleteWorkout'
import { useWorkouts } from './hooks/useWorkouts'
const WorkoutsList = () => {
	const { data } = useQuery(['get workouts'], () => WorkoutService.getAll())

	const { createLog, isSuccess, isSuccessMutate } = useWorkouts()
	const { deleteWorkout } = useDeleteWorkout()

	return (
		<>
			<Layout bgImage={'/public/images/workouts-bg.jpg'} heading='Workouts' />

			<div className={styles.main}>
				{isSuccessMutate && <Success value={'Workout log created'} />}
				{isSuccess && (
					<div className={styles.workouts}>
						{data?.data.map((workout, index) => (
							<Fragment key={workout.id}>
								{console.log(workout)}
								<WorkoutItem
									key={workout.id}
									workout={workout}
									mutate={createLog}
									deleteWorkout={deleteWorkout}
								/>
								{index % 2 !== 0 && index !== data.data.length - 1 && (
									<div className={styles.line}></div>
								)}
							</Fragment>
						))}
					</div>
				)}
			</div>
		</>
	)
}

export default WorkoutsList
