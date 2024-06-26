import { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import styles from './Hamburger.module.scss'
import Menu from './Menu'
const Hamburger = () => {
	const [isShow, setIsShow] = useState(false)

	return (
		<>
			<div className={styles.hamburger}>
				<div>
					<button onClick={() => setIsShow(!isShow)}>
						{isShow ? <IoClose /> : <CgMenuRight />}
					</button>
					{isShow ? <Menu /> : ''}
				</div>
			</div>
		</>
	)
}

export default Hamburger
