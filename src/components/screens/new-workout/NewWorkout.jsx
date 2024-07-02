import cn from 'clsx';
import stylesLayout from '../../layout/Layout.module.scss';
import Button from '../../ui/button/Button';
import '/src/assets/styles/index.scss';

import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import WorkoutService from '../../../services/workout/workout.service';
import Header from '../../layout/header/Header';
import Loading from '../../ui/Loading';
import Field from '../../ui/field/Field';
import Success from '../../ui/status/Success';
import ExercisesList from './ExercisesList';
import styles from './NewWorkout.module.scss';
// const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewWorkout = () => {
	const { control, register, handleSubmit, reset } = useForm({
		mode: 'onChange'
	});

	const { mutate, isLoading, isSuccess } = useMutation(
		['create workout'],
		body => WorkoutService.create(body),
		{
			onSuccess: () => {
				reset({
					name: '',
					exerciseIds: []
				});
			}
		}
	);

	const onSubmit = data => {
		mutate({
			name: data.name,
			exerciseIds: data.exerciseIds.map(ex => ex.value)
		});
	};

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/create-new.jpg')`,
					height: 280,
					borderRadius: '0 0 23px 23px'
				}}
			>
				<Header />
				{isLoading ? <Loading /> : null}
				{isSuccess && <Success value={'Workout created'} />}
				<div className={styles.center}>
					<h1 className={stylesLayout.heading}>Create new workout</h1>
				</div>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Field
					name={'name'}
					placeholder='Enter name'
					type='text'
					register={register}
					options={{ required: 'Exercise is required' }}
				/>

				<Link to={'/new-exercise'} className={styles.link}>
					Add new exercise
				</Link>

				<ExercisesList control={control} />
				<div style={{ marginTop: '3rem' }}>
					<Button heading='Create' />
				</div>
			</form>
		</>
	);
};

export default NewWorkout;
