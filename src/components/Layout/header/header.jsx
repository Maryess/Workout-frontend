import { FaRegUser } from 'react-icons/fa'
import { IoArrowBack } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'
import Palette from './palette/Palette'
const Header = ({ backlink = '/' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{pathname !== '/' || !isAuth ? (
				<button
					onClick={() => {
						navigate(isAuth ? backlink : '/auth')
					}}
				>
					<IoArrowBack color='#fff' fontSize={30} />
				</button>
			) : (
				<button
					onClick={() => {
						navigate('/profile')
					}}
				>
					<FaRegUser color='#fff' fontSize={30} />
				</button>
			)}
			{isAuth ? (
				<div style={{ position: 'relative', display: 'flex' }}>
					<Palette /> <Hamburger />
				</div>
			) : (
				<Palette />
			)}
		</header>
	)
}

export default Header
