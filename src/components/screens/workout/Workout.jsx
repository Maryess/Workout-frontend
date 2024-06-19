import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useNavigate } from 'react-router-dom'
import workoutService from '../../../services/workoutService'
import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'
import styles from './Workout.module.scss'

const Workout = () => {
	const useWorkouts = () => {
		return useQuery(['get profile'], () => workoutService.getAll())
	}
	const navigate = useNavigate()
	const { data } = useWorkouts()

	return (
		<>
			<Header />
			<div
				className={cn(stylesLayout.wrapper)}
				style={{
					backgroundImage: `url('/images/workouts-bg.jpg')`,
					height: 280,
					borderRadius: '0 0 23px 23px'
				}}
			></div>
			<div className={styles.workouts}>
				{data?.data.map((workout, item) => (
					<div className={styles.workouts_list} key={item}>
						<button onClick={() => navigate('/exercises')} type='text'>
							{workout.name}
						</button>
					</div>
				))}
			</div>
		</>
	)
}

export default Workout
