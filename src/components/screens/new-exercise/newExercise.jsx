import cn from 'clsx';
import stylesLayout from '../../layout/Layout.module.scss';

import Button from '../../ui/button/Button';

import { useMutation } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import ExerciseService from '../../../services/exercise/exercise.service';
import Header from '../../layout/header/Header';
import Loading from '../../ui/Loading';
import Field from '../../ui/field/Field';
import Error from '../../ui/status/Error';
import Success from '../../ui/status/Success';
import styles from './NewExercise.module.scss';
import { icons } from './icons.dara';

const NewExercise = () => {
	const { register, handleSubmit, reset, control } = useForm({
		mode: 'onChange'
	});
	const { mutate, isLoading, isSuccess, error } = useMutation(
		['create exercise'],
		body => ExerciseService.create(body),
		{
			onSuccess: () => {
				reset();
			}
		}
	);

	const onSubmit = async data => {
		mutate(data);
		console.log(data);
	};

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/exercise-bg.jpg')`,
					height: 280,
					borderRadius: '0 0 23px 23px'
				}}
			>
				<Header backlink='/new-workout' />
				{isLoading ? <Loading /> : null}
				{isSuccess ? <Success value={'Exercise created'} /> : null}
				{error ? <Error value={error} /> : null}
				<div className={styles.center}>
					<h1 className={stylesLayout.heading}>Create new exercise</h1>
				</div>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Field
					error={error?.name?.message}
					name={'name'}
					placeholder='Name '
					type='text'
					register={register}
					options={{ required: 'Exercise is required' }}
				/>

				<Field
					error={error?.times?.message}
					placeholder='times'
					register={register}
					name={'times'}
					options={{
						required: 'Times is required',
						valueAsNumber: true,
						validate: value => value > 0 || 'Times must be number'
					}}
				/>
				<Controller
					name='iconPath'
					control={control}
					render={({ field: { onChange } }) => (
						<div className={styles.icon}>
							{icons.map(icon => (
								<img
									key={icon.id}
									src={icon.url}
									alt={icon.name}
									onClick={() => onChange(icon.url)}
								/>
							))}
						</div>
					)}
				/>

				<Button heading='Create' />
			</form>
		</>
	);
};

export default NewExercise;
