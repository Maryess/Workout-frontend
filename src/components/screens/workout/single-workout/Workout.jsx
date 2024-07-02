import { useMutation, useQuery } from '@tanstack/react-query';
import cn from 'clsx';
import { Fragment } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import WorkoutLogService from '../../../../services/workout/workout-log.service';
import stylesLayout from '../../../layout/Layout.module.scss';
import Header from '../../../layout/header/Header';
import Button from '../../../ui/button/Button';
import ExerciseItem from '../../exercise/ExerciseItem';
import styles from '../Workout.module.scss';
const Workout = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { data, isSuccess } = useQuery(['get workout', id], () =>
		WorkoutLogService.getById(id)
	);

	const { mutate } = useMutation(
		['complete workout'],
		() => WorkoutLogService.complete(id),
		{
			onSuccess: () => {
				navigate('/workouts');
			}
		}
	);

	console.log(data?.data);
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
				<Header backlink={isSuccess && '/workouts'} />
				<p
					style={{
						opacity: 0.3,
						marginTop: '2.5rem'
					}}
				>
					{data?.data.minutes} minutes
				</p>
				<h1 className={stylesLayout.heading}>{data?.data.workout.name}</h1>
			</div>
			<div className={styles.main}>
				<div className={styles.workouts}>
					{data?.data.logExercises.map((logExercise, index) => (
						<Fragment key={logExercise.id}>
							<ExerciseItem exercise={logExercise} />
							{index % 2 !== 0 &&
								index !== data?.data.logExercises.length - 1 && (
									<div className={styles.line}></div>
								)}
						</Fragment>
					))}
					<div style={{ marginTop: '3rem' }}>
						<Button click={() => mutate()} heading='Complete workout' />
					</div>
				</div>
			</div>
		</>
	);
};

export default Workout;
