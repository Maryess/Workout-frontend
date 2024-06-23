import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import WorkoutService from '../../../services/workout/workout.service'
import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'
import Workouts from './Workouts'
import { useDeleteWorkout } from './hooks/useDeleteWorkout'
import { useWorkouts } from './hooks/useWorkouts'

const WorkoutsList = () => {
	const { data } = useQuery(['get workouts'], () => WorkoutService.getAll())

	const { mutate } = useWorkouts()
	const { deleteWorkout } = useDeleteWorkout()

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
			</div>

			{data?.data.map(workout => (
				<Workouts
					key={workout.id}
					workout={workout}
					mutate={mutate}
					deleteWorkout={deleteWorkout}
				/>
			))}
		</>
	)
}

export default WorkoutsList
