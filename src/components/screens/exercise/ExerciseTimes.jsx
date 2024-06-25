import styles from './Exercises.module.scss'
import { useExerciseLog } from './exercise-log/hooks/useExerciseLog'

const ExerciseTimes = ({ time }) => {
	const { changeTimesValue, getTimeValue, updateTimeValue } = useExerciseLog()
	return (
		<div>
			<div className={styles.exercise_times} key={time.id}>
				<div
					className={time.isCompleted ? styles.completed : ''}
					style={{ display: 'flex' }}
				>
					<input
						style={{ width: 20 }}
						type='number'
						defaultValue={time.prevWeight}
						disabled
					/>
					<i>/kg{time.isCompleted ? '' : ''}</i>
					<input
						style={{ width: 20 }}
						type='number'
						defaultValue={time.repeat}
						disabled
					/>
				</div>
				<div
					className={time.isCompleted ? styles.completed : ''}
					style={{ display: 'flex' }}
				>
					<input
						value={getTimeValue(time.id, 'weight')}
						onChange={e => {
							changeTimesValue(time.id, 'weight', +e.target.value)
						}}
						disabled={time.isCompleted}
						style={{ width: 20 }}
						type='tel'
					/>
					<i>/kg{time.isCompleted ? '' : ''}</i>
					<input
						value={getTimeValue(time.id, 'repeat')}
						onChange={e => {
							changeTimesValue(time.id, 'repeat', +e.target.value)
						}}
						style={{ width: 20 }}
						type='tel'
						disabled={time.isCompleted}
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
							updateTimeValue(time.id, !getTimeValue(time.id, 'isCompleted'))
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default ExerciseTimes