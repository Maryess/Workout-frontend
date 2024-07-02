import Cookies from 'js-cookie';
import { createContext, useState } from 'react';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(!!Cookies.get('work'));

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
