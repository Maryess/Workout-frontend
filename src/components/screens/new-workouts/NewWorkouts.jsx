import cn from 'clsx'
import stylesLayout from '../../layout/Layout.module.scss'

import Button from '../../ui/button/Button'

import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import workoutService from '../../../services/workoutService'
import Header from '../../layout/header/Header'
import Field from '../../ui/field/Field'
import ExerciseList from './ExerciseList'
import styles from './NewWorkouts.module.scss'
// const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewWorkout = () => {
	const { register, handleSubmit, reset } = useForm({
		mode: 'onChange'
	})
	// const {} = useFieldArray(
	// 	{
	// 		control, // control props comes from useForm (optional: if you are using FormContext)
	// 		name: 'test' // unique name for your Field Array
	// 		// keyName: "id", default to "id", you can change the key name
	// 	}
	// )

	const { mutate } = useMutation(
		['create exercise'],
		body => workoutService.create(body),
		{
			onSuccess: () => {
				alert('success')
				reset()
			}
		}
	)

	const onSubmit = async data => {
		mutate(data)
		console.log(data)
		alert(data)
	}

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
			>
				<div className={styles.center}>
					<h1 className={stylesLayout.heading}>Create new workout</h1>
				</div>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Field
					name={'name'}
					placeholder='Enter name workout'
					type='text'
					register={register}
					options={{ required: 'Exercise is required' }}
				/>

				<ExerciseList />

				<Button heading='Create' />
			</form>
		</>
	)
}

export default NewWorkout
