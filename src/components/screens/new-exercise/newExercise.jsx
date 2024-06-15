import cn from 'clsx'
import stylesLayout from '../../Layout/Layout.module.scss'
import Header from '../../Layout/header/header'
import Button from '../../ui-kits/button/Button'
import Field from '../../ui-kits/field/Field'
import exerciseData from './exercise.data'
import styles from './newExercise.module.scss'
const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const newExercise = () => {
	function onInput(event) {
		const value = event.target.value
		return value
	}

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
				<Header />
				<div className={styles.center}>
					<h1 className={stylesLayout.heading}>Create new exercise</h1>
				</div>
			</div>
			<form className={styles.form}>
				<Field placeholder='Name' type='text' getValue={onInput} />
				<Field placeholder='Time' type='text' />

				<Button
					heading='Create'
					click={e => {
						e.preventDefault()
						exerciseData.create({
							name: this.value
						})
					}}
				/>
			</form>
		</>
	)
}

export default newExercise
