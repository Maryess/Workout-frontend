import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

import { exerciseLogService } from '../../../../../services/exercise/exercise-log.service';

export const useCompleteLog = () => {
	const { id } = useParams();

	const navigate = useNavigate();
	const { complete } = exerciseLogService();

	const { mutate, error: errorCompleted } = useMutation(
		['complete log'],
		body => complete(id, body),
		{
			onSuccess: ({ data }) => {
				navigate(`/workout/${data.logWorkoutId}`);
			}
		}
	);

	return { completeLog: mutate, errorCompleted };
};
