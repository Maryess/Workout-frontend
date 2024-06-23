import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import WorkoutLogService from '../../../../services/workout/workout-log.service'

export const useWorkouts = () => {
	const navigate = useNavigate()

	const { id } = useParams()

	const { data } = useQuery(['get workout', id], () =>
		WorkoutLogService.getById(id)
	)

	const { mutate } = useMutation(
		['create log workout'],
		workoutId => WorkoutLogService.create(workoutId),
		{
			onSuccess({ data }) {
				navigate(`/workout/${data.id}`)
			}
		}
	)

	return {
		data,
		mutate
	}
}
