import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import './Hamburger.module.scss'
import styles from './Hamburger.module.scss'
import { menu } from './menu.data'

const Menu = () => {
	const { setIsAuth } = useAuth()
	const navigate = useNavigate()
	const logout = () => {
		Cookies.remove('work')
		setIsAuth(false)
		navigate('/auth')
	}

	return (
		<nav className={styles.menu}>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<button onClick={logout}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
