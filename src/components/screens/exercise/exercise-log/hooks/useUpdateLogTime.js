import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { exerciseLogService } from '../../../../../services/exercise/exercise-log.service';
import { useCompleteLog } from './useCompleted';

export const useUpdateLogTime = times => {
	const { id } = useParams();
	const { completeLog } = useCompleteLog();
	const queryClient = useQueryClient();
	const { updateTime } = exerciseLogService();
	const [isComplete, setIsComplete] = useState(false);

	const { mutate, isSuccess } = useMutation(
		['update exercise-log time'],
		({ timeId, body }) =>
			updateTime(timeId, body).then(() => {
				const time = times.filter(time => time.isCompleted);

				if (time.length === times.length - 1) {
					completeLog({ isCompleted: true });
					setIsComplete(!isComplete);
				}
			}),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('get exercise log', id);
			}
		}
	);
	return { mutate, isSuccess, isComplete, setIsComplete };
};
