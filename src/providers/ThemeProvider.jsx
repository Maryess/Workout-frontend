import Cookies from 'js-cookie';
import { createContext, useState } from 'react';
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [isTheme, setIsTheme] = useState(!!Cookies.get('color'));

	return (
		<ThemeContext.Provider value={{ isTheme, setIsTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
