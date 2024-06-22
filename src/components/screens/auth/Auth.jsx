import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import AuthService from '../../../services/auth.service'
import Loading from '../../ui/Loading'
import stylesButton from '../../ui/button/Button.module.scss'
import Field from '../../ui/field/Field'
import styles from './Auth.module.scss'

const Auth = () => {
	const { isAuth, setIsAuth } = useAuth()
	const navigate = useNavigate()

	console.log(isAuth)
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const [type, setType] = useState('register')
	const { mutate, isLoading } = useMutation(
		['auth'],
		({ email, password }) => AuthService.main(email, password, type),

		{
			onSuccess: () => {
				setIsAuth(!isAuth)
				navigate('/')
				reset()
			}
		}
	)

	const onSubmit = async data => {
		mutate(data)
	}

	return (
		<div className={styles.content}>
			<div className={styles.wrapper}>
				<img src='/src/assets/icons/main.svg' style={{ height: 56 }} alt='' />
			</div>
			{isLoading ? <Loading /> : ''}
			<div className={styles.main}>
				<form onSubmit={handleSubmit(onSubmit)}>
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

					<div className={styles.wrapperButtons} style={{ marginTop: '4rem' }}>
						<button
							className={cn(stylesButton.button)}
							onClick={() => {
								setType('login')
							}}
						>
							<p className={cn(stylesButton.heading)}>Sign in</p>
						</button>
						<button
							className={cn(stylesButton.button)}
							onClick={() => {
								setType('register')
							}}
						>
							<p className={cn(stylesButton.heading)}>Sign out</p>
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Auth
