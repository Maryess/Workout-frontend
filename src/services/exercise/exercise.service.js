import { $axios } from '../../api';

export const exerciseService = () => {
	const create = async body => {
		return await $axios.post(`/exercises`, body);
	};

	const getAll = async () => {
		return await $axios.get(`/exercises`);
	};

	const getById = async id => {
		return await $axios.get(`/exercises/${id}`);
	};

	return {
		create,
		getAll,
		getById
	};
};
