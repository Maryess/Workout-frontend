import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useNavigate } from 'react-router-dom'
import WorkoutService from '../../../services/workoutService'
import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'
import styles from './Workout.module.scss'

const WorkoutsList = () => {
	const { data } = useQuery(['get workouts'], () => WorkoutService.getAll())
	const navigate = useNavigate()
	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/workouts-bg.jpg')`,
					height: 280,
					borderRadius: '0 0 23px 23px'
				}}
			>
				<Header />
			</div>

			<div className={styles.workouts}>
				{data?.data.map((workout, item) => (
					<div className={styles.workouts_list} key={item}>
						<button
							onClick={() => {
								navigate(`/workout/${workout.id}`)
							}}
							type='text'
						>
							{workout.name}
						</button>
					</div>
				))}
			</div>
		</>
	)
}

export default WorkoutsList
