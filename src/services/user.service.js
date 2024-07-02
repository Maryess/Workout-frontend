import { $axios } from '../api';

export const userService = () => {
	const getName = async () => {
		return $axios.get('/users/profile');
	};

	return { getName };
};
