import cn from 'clsx'
import stylesLayout from '../../layout/Layout.module.scss'

import Button from '../../ui/button/Button'

import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import ExerciseService from '../../../services/exerciseService'
import Header from '../../layout/header/Header'
import Field from '../../ui/field/Field'
import styles from './Workouts.module.scss'
// const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const Workouts = () => {
	const { register, handleSubmit } = useForm({
		mode: 'onChange'
	})
	const { mutate } = useMutation(['create exercise'], body =>
		ExerciseService.create(body)
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

				<Field
					placeholder='Enter times'
					type='text'
					register={register}
					name={'times'}
					options={{ required: 'Times is required' }}
				/>

				<Button heading='Create' />
			</form>
		</>
	)
}

export default Workouts
