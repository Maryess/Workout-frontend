import { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import { RiColorFilterLine } from 'react-icons/ri'
import styles from './Hamburger.module.scss'
import Menu from './Menu'
import Palette from './palette/Palette'
const Hamburger = () => {
	const [isShow, setIsShow] = useState(false)
	const [isShowPalette, setIsShowPalette] = useState(false)
	return (
		<>
			<div className={styles.hamburger}>
				<div>
					<button onClick={() => setIsShowPalette(!isShowPalette)}>
						<RiColorFilterLine fontSize={30} />
					</button>
					{isShowPalette ? <Palette /> : ''}
				</div>
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
