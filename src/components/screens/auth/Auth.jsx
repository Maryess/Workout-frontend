import { useMutation, useQueryClient } from '@tanstack/react-query'
import cn from 'clsx'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import AuthService from '../../../services/auth.service'
import Palette from '../../layout/header/palette/Palette'
import stylesPalette from '../../layout/header/palette/Palette.module.scss'
import Loading from '../../ui/Loading'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import styles from './Auth.module.scss'

const Auth = () => {
	const { isAuth, setIsAuth } = useAuth()
	const navigate = useNavigate()
	const queryClient = useQueryClient()

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
				window.location.reload()
				reset()
			}
		}
	)

	const onSubmit = async data => {
		mutate(data)
	}

	return (
		<>
			<div className={cn(stylesPalette.palette)}>
				<Palette auth={true} />
			</div>
			<div className={styles.main}>
				<div className={styles.wrapper}>
					<img src='/src/assets/icons/main.svg' style={{ height: 56 }} alt='' />
				</div>
				{isLoading ? <Loading /> : ''}
				<div className={styles.content}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div style={{ marginBottom: '4rem' }}>
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
						</div>
						<div className={styles.wrapperButtons}>
							<Button
								click={() => {
									setType('login')
								}}
								heading='Sign in'
							/>
							<Button
								click={() => {
									setType('register')
								}}
								heading='Sign out'
							/>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Auth
