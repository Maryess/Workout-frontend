import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = ({ children, click, heading = '' }) => {
	return (
		<div className={styles.wrapper}>
			<button onClick={click} className={clsx(styles.button)}>
				{heading && <p className={styles.heading}>{heading}</p>}
				{children}
			</button>
		</div>
	);
};

export default Button;
