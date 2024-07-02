import clsx from 'clsx';
import styles from './Status.module.scss';
const Error = ({ value }) => {
	return (
		<div className={clsx(styles.success, styles.error)}>
			<p>{value}</p>
		</div>
	);
};

export default Error;
