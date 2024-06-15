import { useNavigate } from 'react-router-dom'
import Layout from '../../Layout/Layout'
import Button from '../../ui-kits/button/Button'
import Statistics from '../profile/statistics/Statistics'
import styles from './Home.module.scss'
const Home = () => {
	const navigate = useNavigate()

	return (
		<Layout bgImage={'/images/home-bg.jpg'}>
			<Button
				className={styles.button}
				click={() => {
					navigate('/exercise')
				}}
				heading='New'
				width={146}
				height={66}
			/>
			<h1 className={styles.heading}>EXERCISE FOR THE SHOULDERS</h1>
			<Statistics />
		</Layout>
	)
}

export default Home
