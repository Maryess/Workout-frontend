import cn from 'clsx';
import styles from './Success.module.scss';
const Error = ({ value }) => {
	return (
		<div className={cn(styles.success, styles.error)}>
			<p>{value}</p>
		</div>
	);
};

export default Error;
