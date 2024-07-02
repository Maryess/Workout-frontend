import { $axios } from '../api';

class UserService {
	async getName() {
		return $axios.get('/users/profile');
	}
}

export default new UserService();
