import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useParams } from 'react-router-dom'
import ExerciseLogService from '../../../services/exercise/exercise-log.service'
import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'
import styles from './Exercises.module.scss'
import { useExerciseLog } from './exercise-log/hooks/useExerciseLog'

const Exercise = () => {
	const { id } = useParams()

	const { data } = useQuery(['get exercise-log', id], () =>
		ExerciseLogService.getById(id)
	)

	const { changeTimesValue, getTime, getTimeValue, updateTimeValue } =
		useExerciseLog()

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/exercise-bg.svg')`,
					height: 280,
					borderRadius: '0 0 23px 23px'
				}}
			>
				<Header />
				<h1>{data?.data.name}</h1>
			</div>
			<div className={styles.exercise_log}>
				<div>
					<div>Previous</div>
				</div>
				<div>
					<div>Repeat & weight</div>
				</div>
				<div>
					<div>Completed</div>
				</div>
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
								onClick={() =>
									updateTimeValue(
										time.id,
										!getTimeValue(time.id, 'isCompleted')
									)
								}
							/>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Exercise
