import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { exerciseLogService } from '../../../../../services/exercise/exercise-log.service';
import { useUpdateLogTime } from './useUpdateLogTime';

export const useExerciseLog = () => {
	const [times, setTimes] = useState([]);

	const { id } = useParams();
	const { getById } = exerciseLogService();
	const { mutate } = useUpdateLogTime(times);

	const { data, isSuccess, isLoading } = useQuery(
		['get exercise-log', id],
		() => getById(id),
		{
			onSuccess(data) {
				if (data?.data.times?.length) setTimes(data?.data.times);
			}
		}
	);

	const changeTimesValue = (timeId, key, value) => {
		const newTimes = times.map(time => {
			if (time.id === timeId) {
				return { ...time, [key]: value };
			}

			return time;
		});

		setTimes(newTimes);
	};

	const getTime = timeId => {
		return times.find(time => time.id === timeId);
	};

	const getTimeValue = (timeId, key) => {
		const time = getTime(timeId, key);
		console.log(time);
		return time ? time[key] : key === 'isCompleted' ? false : 0;
	};

	const updateTimeValue = (timeId, isCompleted) => {
		const time = getTime(timeId);
		mutate({
			timeId,
			body: {
				isCompleted,
				repeat: +time.repeat,
				weight: +time.weight
			}
		});
	};

	const getZeroData = (timeId, isCompleted) => {
		mutate({
			timeId,
			body: {
				isCompleted,
				repeat: 0,
				weight: 0
			}
		});
	};

	return {
		data,
		times,
		setTimes,
		changeTimesValue,
		getTime,
		getTimeValue,
		updateTimeValue,
		getZeroData,
		isSuccess,
		isLoading
	};
};
