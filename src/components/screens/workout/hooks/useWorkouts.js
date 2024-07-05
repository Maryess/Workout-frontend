import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { workoutLogService } from '../../../../services/workout/workout-log.service';
import { workoutService } from '../../../../services/workout/workout.service';

export const useWorkouts = () => {
	const navigate = useNavigate();
	const { getAll } = workoutService();
	const { create } = workoutLogService();
	const { data, isSuccess } = useQuery(['get workouts'], () => getAll());

	const { mutate, isSuccess: isSuccessMutate } = useMutation(
		['create log workout'],
		workoutId => create(workoutId),
		{
			onSuccess(data) {
				navigate(`/workout/${data.data.id}`);
			}
		}
	);

	return {
		data,
		createLog: mutate,
		isSuccess,
		isSuccessMutate
	};
};
