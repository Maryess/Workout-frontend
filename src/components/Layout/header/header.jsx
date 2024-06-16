import { FaRegUser } from 'react-icons/fa'
import { IoArrowBack } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'
const Header = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate('/')
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
			<Hamburger />
		</header>
	)
}

export default Header
