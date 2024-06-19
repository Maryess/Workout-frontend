import { useState } from 'react'
import { useExercise } from '../../../hooks/useExercise'
import stylesField from '../../ui/field/Field.module.scss'
import styles from './NewWorkouts.module.scss'
const ExerciseList = () => {
	const [isShow, setIsShow] = useState(false)
	const [isValue, setIsValue] = useState('')
	const { data } = useExercise()
	console.log(isShow)
	console.log(isValue)
	return (
		<>
			<form className={styles.exercise_list}>
				<input
					className={stylesField.input}
					type='text'
					placeholder='Exercises...'
					value={isValue}
				/>
				<button
					onClick={e => {
						e.preventDefault()
						setIsShow(!isShow)
					}}
				>
					<img src='/src/assets/icons/arrow-down.svg' alt='' />
				</button>
			</form>
			<div>
				{isShow === true
					? data?.data.map((exercise, item) => (
							<li style={{ textAlign: 'center' }} key={item}>
								<button
									onClick={e => {
										e.preventDefault()
										setIsValue(`${exercise.name}`)
										console.log(exercise)
									}}
								>
									{exercise.name}
								</button>
							</li>
						))
					: null}
			</div>
		</>
	)
}

export default ExerciseList
