import styles from './Field.module.scss'

const Field = ({ children, placeholder = '', type = '', icon, getValue }) => {
	return (
		<div style={{ marginBottom: '1rem' }}>
			<input
				className={styles.input}
				type={type}
				placeholder={placeholder}
				style={{ backgroundImage: `url(${icon})` }}
				onChange={getValue}
			/>
			{children}
		</div>
	)
}

export default Field
