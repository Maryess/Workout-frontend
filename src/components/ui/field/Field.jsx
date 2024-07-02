import styles from './Field.module.scss';
const Field = ({ register, name, error, options, ...rest }) => {
	return (
		<div style={{ marginBottom: '1rem' }}>
			<input {...register(name, options)} {...rest} className={styles.input} />
			{error && <div className={styles.error}>{error}</div>}
		</div>
	);
};

export default Field;
