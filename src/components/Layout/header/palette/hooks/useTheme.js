import Cookies from 'js-cookie'
import { useLayoutEffect, useState } from 'react'
export const useTheme = () => {
	const [theme, setTheme] = useState(Cookies.get('theme'))

	useLayoutEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])

	return {
		theme,
		setTheme
	}
}
