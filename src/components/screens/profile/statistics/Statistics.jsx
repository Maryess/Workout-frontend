import styles from './Statistics.module.scss'
import { statistics } from './statistics.data'
const Statistics = () => {
	return (
		<div className={styles.wrapper}>
			{statistics.map((statistic, index) => (
				<div className={styles.count} key={index}>
					<div className={styles.heading}>{statistic.label}</div>
					<div className={styles.number}>{statistic.value}</div>
				</div>
			))}
		</div>
	)
}

export default Statistics
