import { useQuery } from '@tanstack/react-query';
import { userService } from '../services/user.service';

export const useProfile = () => {
	const { getName } = userService();
	return useQuery(['get profile'], () => getName());
};
