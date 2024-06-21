import cn from 'clsx'
import { useWorkout } from '../../../hooks/useWorkout'
import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'

const Exercises = () => {
	const { data } = useWorkout()

	return (
		<>
			<Header />
			<div
				className={cn(stylesLayout.wrapper)}
				style={{
					backgroundImage: `url('/images/workouts-bg.jpg')`,
					height: 280,
					borderRadius: '0 0 23px 23px'
				}}
			></div>
			<div>
				{data?.data.exercises.map(exercise => (
					<button key={exercise.id}>{exercise.name}</button>
				))}
			</div>
		</>
	)
}

export default Exercises
