import cn from 'clsx'
import stylesLayout from '../../layout/Layout.module.scss'

import Button from '../../ui/button/Button'

import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import WorkoutService from '../../../services/workoutService'
import Header from '../../layout/header/Header'
import Loading from '../../ui/Loading'
import Field from '../../ui/field/Field'
import ExercisesList from './ExercisesList'
import styles from './NewWorkout.module.scss'
// const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewWorkout = () => {
	const { control, register, handleSubmit, reset } = useForm({
		mode: 'onChange'
	})
	// const {} = useFieldArray(
	// 	{
	// 		control, // control props comes from useForm (optional: if you are using FormContext)
	// 		name: 'test' // unique name for your Field Array
	// 		// keyName: "id", default to "id", you can change the key name
	// 	}
	// )

	const { mutate, isLoading } = useMutation(
		['create workout'],
		body => WorkoutService.create(body),
		{
			onSuccess: () => {
				alert('Workouts created')
				reset({
					name: '',
					exerciseIds: []
				})
			}
		}
	)

	const onSubmit = data => {
		mutate({
			name: data.name,
			exerciseIds: data.exerciseIds.map(ex => ex.value)
		})
	}

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
				<div className={styles.center}>
					<h1 className={stylesLayout.heading}>Create new workout</h1>
				</div>
			</div>
			{isLoading ? <Loading /> : null}
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Field
					name={'name'}
					placeholder='Enter name workout'
					type='text'
					register={register}
					options={{ required: 'Exercise is required' }}
				/>

				<ExercisesList control={control} />

				<Button heading='Create' />
			</form>
		</>
	)
}

export default NewWorkout
