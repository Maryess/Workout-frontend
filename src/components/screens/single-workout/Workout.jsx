import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useParams } from 'react-router-dom'
import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'
import Button from '../../ui/button/Button'
import WorkoutService from '/src/services/workoutService'

const Workout = () => {
	const { id } = useParams()

	const { data } = useQuery(['get exercise', id], () =>
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
					<Button key={exercise.id} heading={exercise.name} />
				))}
			</div>
		</>
	)
}

export default Workout
