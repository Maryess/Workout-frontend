import styles from './Status.module.scss';

const Success = ({ value }) => {
	return (
		<div className={styles.success}>
			<p>{value}</p>
		</div>
	);
};

export default Success;
