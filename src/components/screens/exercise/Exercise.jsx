import cn from 'clsx'
import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'
import styles from './Exercises.module.scss'
import { useExerciseLog } from './exercise-log/hooks/useExerciseLog'
import { title } from './exercise.title'

const Exercise = () => {
	const { data, changeTimesValue, getTimeValue, updateTimeValue, isSuccess } =
		useExerciseLog()

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
			<div className={styles.exercise_log}>
				<div className={styles.title}>
					{title.map(el => (
						<div key={el.id}>{el.name}</div>
					))}
				</div>
				<div className={styles.main}>
					{data?.data.times.map(time => (
						<div className={styles.exercise_times} key={time.id}>
							<div style={{ display: 'flex' }}>
								<input
									style={{ width: 20 }}
									type='number'
									defaultValue={time.prevWeight}
								/>
								<p>/kg</p>
								<input
									style={{ width: 20 }}
									type='number'
									defaultValue={time.repeat}
								/>
							</div>
							<div style={{ display: 'flex' }}>
								<input
									value={getTimeValue(time.id, 'weight')}
									onChange={e => {
										changeTimesValue(time.id, 'weight', +e.target.value)
									}}
									disabled={time.isCompleted}
									style={{ width: 20 }}
									type='tel'
								/>
								<p>/kg</p>
								<input
									value={getTimeValue(time.id, 'repeat')}
									onChange={e => {
										changeTimesValue(time.id, 'repeat', +e.target.value)
									}}
									style={{ width: 20 }}
									type='tel'
								/>
							</div>
							<div key={`Completed ${time.id}/${time.isCompleted}`}>
								<img
									src={
										getTimeValue(time.id, 'isCompleted')
											? '/src/assets/icons/complete.svg'
											: '/src/assets/icons/completed.svg'
									}
									alt=''
									style={{ width: 20 }}
									onClick={() => {
										console.log(time.id)
										updateTimeValue(
											time.id,
											!getTimeValue(time.id, 'isCompleted')
										)
									}}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Exercise
