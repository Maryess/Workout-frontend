import { $axios } from '../api';

export const workoutLogService = () => {
	const create = async workoutId => {
		return await $axios.post(`/workouts/log/${workoutId}`);
	};

	const getAll = async () => {
		return await $axios.get(`/workouts/log`);
	};

	const getById = async id => {
		return await $axios.get(`/workouts/log/${id}`);
	};

	const deleteAll = async () => {
		return await $axios.delete(`/workouts/log`);
	};

	const deleteById = async id => {
		return await $axios.delete(`/workouts/log/${id}`);
	};

	const complete = async id => {
		return await $axios.patch(`/workouts/log/complete/${id}`);
	};

	return {
		complete,
		deleteAll,
		deleteById,
		getById,
		getAll,
		create
	};
};
