import { useMutation, useQueryClient } from '@tanstack/react-query';
import { workoutService } from '../../../../services/workout/workout.service';

export const useDeleteWorkout = () => {
	const queryClient = useQueryClient();
	const { deleteById } = workoutService();
	const { mutate } = useMutation(['delete workout'], id => deleteById(id), {
		onSuccess: () => {
			queryClient.invalidateQueries('delete workout ');
		}
	});

	return {
		deleteWorkout: mutate
	};
};
