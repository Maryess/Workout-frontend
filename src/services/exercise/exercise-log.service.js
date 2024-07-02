import { $axios } from '../../api';

export const exerciseLogService = () => {
	const create = async exerciseId => {
		return await $axios.post(`/exercises/log/${exerciseId}`);
	};

	const updateTime = async (timeId, body) => {
		return await $axios.put(`/exercises/log/time/${timeId}`, body);
	};

	const complete = async (id, body) => {
		return $axios.patch(`/exercises/log/complete/${id}`, body);
	};

	const getAll = async () => {
		return await $axios.get(`/exercises/log`);
	};

	const getById = async id => {
		return await $axios.get(`/exercises/log/${id}`);
	};

	return {
		create,
		updateTime,
		complete,
		getAll,
		getById
	};
};
