import cn from 'clsx'
import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'
import Loading from '../../ui/Loading'
import ExerciseTimes from './ExerciseTimes'
import styles from './Exercises.module.scss'
import { useExerciseLog } from './exercise-log/hooks/useExerciseLog'
import { title } from './exercise.title'

const Exercise = () => {
	const { isLoading, isSuccess, data } = useExerciseLog()

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/exercise.jpg')`,
					height: 280,
					borderRadius: '0 0 23px 23px'
				}}
			>
				<Header
					backlink={
						isSuccess ? `/workout/${data?.data.logWorkoutId}` : '/workouts'
					}
				/>
				<h1 className={stylesLayout.heading}>{data?.data.exercise.name}</h1>
			</div>
			{isLoading ? (
				<Loading />
			) : (
				<div className={styles.main}>
					<div className={styles.wrapper}>
						<div className={styles.title}>
							{title.map(el => (
								<div key={el.id}>
									<span>{el.name}</span>
								</div>
							))}
						</div>
						<div className={styles.form}>
							{data?.data.times.map(time => (
								<ExerciseTimes key={time.id} time={time} />
							))}
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Exercise
