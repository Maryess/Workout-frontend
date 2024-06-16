import { useRouteError } from 'react-router-dom'

const NotFound = () => {
	const error = useRouteError()
	console.error()
	return <div>Error!!!!!!!</div>
}

export default NotFound
