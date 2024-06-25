import { useMutation, useQueryClient } from '@tanstack/react-query'
import WorkoutService from '../../../../services/workout/workout.service'

export const useDeleteWorkout = () => {
	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['delete workout'],
		id => WorkoutService.deleteById(id),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('delete workout ')
			}
		}
	)

	return {
		deleteWorkout: mutate
	}
}
