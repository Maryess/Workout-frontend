import { useRouteError } from 'react-router-dom'

const NotFound = () => {
	const error = useRouteError()
	console.error()
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'gray',
				height: '100%'
			}}
		>
			<img src='/src/assets/icons/error-inspect-ios11-svgrepo-com.svg' alt='' />
			<p> Not found</p>
		</div>
	)
}

export default NotFound
