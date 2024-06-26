import { useExerciseLog } from './exercise-log/hooks/useExerciseLog'
import styles from './Exercises.module.scss'

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
						type='text'
						defaultValue={time.prevWeight}
						disabled
					/>
					<i>/kg{time.isCompleted ? '' : ''}</i>
					<input
						style={{ width: 20 }}
						type='text'
						defaultValue={time.prevRepeat}
						disabled
					/>
				</div>
				<div className={styles.vertical_line}></div>
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
				<div className={styles.vertical_line}></div>
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
							updateTimeValue(time.id, !getTimeValue(time.id, 'isCompleted'))
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default ExerciseTimes
