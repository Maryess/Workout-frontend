import cn from 'clsx'
import { FaRegUser } from 'react-icons/fa'
import { useProfile } from '../../../hooks/useProfile'
import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'
import styles from './Profile.module.scss'
import { images } from './data.image'
import Statistics from './statistics/Statistics'
const Profile = () => {
	const { data } = useProfile()

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper)}
				style={{
					backgroundImage: `url('/images/profile 1.svg')`,
					height: 356
				}}
			>
				<Header />
				<div className={styles.center}>
					<FaRegUser color='#fff' fontSize={79} />
					<h1 className={stylesLayout.heading}>{data?.data.name}</h1>
					<Statistics />
				</div>
			</div>
			<div
				className='wrapper-upper-up'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div className={styles.before_after}>
					{images.map((image, index) => (
						<div key={index}>
							<div className={styles.heading}>
								{index === 1 ? 'After' : 'Before'}
							</div>

							<img src={image.img} alt='' draggable={false} />
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Profile
