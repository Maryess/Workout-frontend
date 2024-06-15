import { useNavigate } from 'react-router-dom'
import Layout from '../../Layout/Layout'
import Button from '../../ui-kits/button/Button'
import Field from '../../ui-kits/field/Field'
import styles from './Auth.module.scss'
const Auth = () => {
	const navigate = useNavigate()

	return (
		<>
			<Layout>
				<div className={styles.wrapper}>
					<img src='/src/assets/icons/main.svg' style={{ height: 56 }} alt='' />
				</div>

				<form className={styles.form}>
					<div className={styles.value}>
						<Field placeholder='Enter email' type='email' />
						<Field placeholder='Enter password' type='password' />
						<a href=''>FORGOT YOUR PASSWORD?</a>
					</div>
				</form>
				<Button
					heading='Sign in'
					click={() => {
						navigate('/')
					}}
				/>
			</Layout>
		</>
	)
}

export default Auth
