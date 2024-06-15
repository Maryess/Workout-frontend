import { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import './hamburger.scss'
import Menu from './menu'

const Hamburger = () => {
	const [isShow, setIsShow] = useState(false)

	return (
		<div className='hamburger'>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose /> : <CgMenuRight />}
			</button>
			{isShow ? <Menu /> : ''}
		</div>
	)
}

export default Hamburger
