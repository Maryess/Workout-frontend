import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import styles from './Auth.module.scss'
const Auth = () => {
	// const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const [type, setType] = useState('Sign in')
	console.log(type)
	const onSubmit = data => {
		console.log(data)
	}

	return (
		<>
			<Layout>
				<div className={styles.wrapper}>
					<img src='/src/assets/icons/main.svg' style={{ height: 56 }} alt='' />
				</div>
				<div className={styles.value}>
					<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
						<Field
							error={errors?.email?.message}
							name={'email'}
							placeholder='Enter email'
							type='text'
							register={register}
							options={{ required: 'Email is required' }}
						/>

						<Field
							placeholder='Enter password'
							type='password'
							register={register}
							name={'password'}
							options={{ required: 'Password is required' }}
						/>

						<a href=''>FORGOT YOUR PASSWORD?</a>

						<div
							className={styles.wrapperButtons}
							style={{ marginTop: '4rem' }}
						>
							<Button
								click={() => {
									setType('Sign in')
								}}
								heading={type}
							/>

							<button
								onClick={() => {
									setType('Sign out')
								}}
							>
								Click to register
							</button>
						</div>
					</form>
				</div>
			</Layout>
		</>
	)
}

export default Auth
