import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import ExerciseLogService from '../../../../../services/exercise-log.service'

export const useUpdateLogTime = () => {
	const { id } = useParams()

	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['get exercise-log', 23],
		() => ExerciseLogService.updateTime(23),
		({ timeId, body }) => ExerciseLogService.updateTime(timeId, body),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get exercise log', 23])
			}
		}
	)

	return {
		mutate
	}
}
