import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from './useAuth';

export const useCheckToken = () => {
	const { setIsAuth, isAuth } = useAuth();
	const { pathname } = useLocation();

	useEffect(() => {
		const token = Cookies.get('get token');
		if (!token) setIsAuth(false);
	}, [pathname, isAuth]);
};
