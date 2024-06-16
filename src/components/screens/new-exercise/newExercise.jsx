import cn from 'clsx'
import stylesLayout from '../../layout/Layout.module.scss'

import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'

import styles from './newExercise.module.scss'
// const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const newExercise = () => {
	return (
		<>
			<div
				className={cn(stylesLayout.wrapper)}
				style={{
					backgroundImage: `url('/images/exercise-bg.svg')`,
					height: 280,
					borderRadius: '0 0 23px 23px'
				}}
			>
				<div className={styles.center}>
					<h1 className={stylesLayout.heading}>Create new exercise</h1>
				</div>
			</div>
			<form className={styles.form}>
				<Field placeholder='Name' type='text' />
				<Field placeholder='Time' type='text' />

				<Button heading='Create' />
			</form>
		</>
	)
}

export default newExercise
