import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import ExerciseLogService from '../../../../../services/exercise/exercise-log.service'

export const useUpdateLogTime = () => {
	const { id } = useParams()

	const queryClient = useQueryClient()

	const { mutate, isSuccess } = useMutation(
		['update exercise-log time'],
		({ timeId, body }) => ExerciseLogService.updateTime(timeId, body),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('get exercise log', id)
			}
		}
	)

	// .then(() => {
	// 	const time = times.filter(time => time.isCompleted)

	// 	time.length === times.length - 1
	// 		? completeLog({ isCompleted: true })
	// 		: ''
	// })
	return {
		mutate,
		isSuccess
	}
}
