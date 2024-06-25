import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import WorkoutLogService from '../../../../services/workout/workout-log.service'
import WorkoutService from '../../../../services/workout/workout.service'

export const useWorkouts = () => {
	const navigate = useNavigate()

	const { data, isSuccess } = useQuery(['get workouts'], () =>
		WorkoutService.getAll()
	)

	const { mutate, isSuccess: isSuccessMutate } = useMutation(
		['create log workout'],
		workoutId => WorkoutLogService.create(workoutId),
		{
			onSuccess(data) {
				navigate(`/workout/${data.data.id}`)
			}
		}
	)

	return {
		data,
		createLog: mutate,
		isSuccess,
		isSuccessMutate
	}
}
