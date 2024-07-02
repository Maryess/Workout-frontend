import { $axios } from '../../api';

export const workoutService = () => {
	const create = async body => {
		return await $axios.post(`/workouts`, body);
	};

	const getAll = async () => {
		return await $axios.get(`/workouts`);
	};

	const getById = async id => {
		return await $axios.get(`/workouts/${id}`);
	};

	const deleteById = async id => {
		return await $axios.delete(`/workouts/${id}`);
	};

	return {
		create,
		getAll,
		getById,
		deleteById
	};
};
