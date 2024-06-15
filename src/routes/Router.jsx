import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Auth from '../components/screen/Auth/Auth'
import Error from '../components/screen/Error/Error'
import Home from '../components/screen/home/Home'
import NewExercise from '../components/screen/new-exercise/newExercise'
import Profile from '../components/screen/profile/Profile'
import Workouts from '../components/screen/Workouts/Workouts'

const Router = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
			errorElement: <Error />
		},
		{
			path: '/profile',
			element: <Profile />,
			errorElement: <Error />
		},
		{
			path: '/workouts',
			element: <Workouts />
		},
		{
			path: '/exercise',
			element: <NewExercise />
		},
		{
			path: 'logout',
			element: <Auth />
		}
	])

	return <RouterProvider router={router}></RouterProvider>
}

export default Router
