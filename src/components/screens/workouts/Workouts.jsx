import cn from 'clsx'
import stylesLayout from '../../Layout/Layout.module.scss'
import Header from '../../Layout/header/header'
import Button from '../../ui-kits/button/Button'
import styles from './Workouts.module.scss'

const Workouts = () => {
	return (
		<>
			<div
				className={cn(stylesLayout.wrapper)}
				style={{
					backgroundImage: `url('/images/workouts-bg.jpg')`,
					height: 356
				}}
			>
				<Header />
				<div>
					<p className={styles.time}>29min.</p>
					<h1 className={styles.heading}>EXERCISE FOR THE SHOULDERS</h1>
				</div>
			</div>
			<div
				className='wrapper-upper-up'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div className={styles.list}>
					{exercises.map((exercise, index) => (
						<div key={index}>
							<Button className={styles.button} heading={exercise.name}>
								<img src={exercise.icon} alt='' />
							</Button>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Workouts
