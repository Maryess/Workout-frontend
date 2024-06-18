import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Auth from '../components/screens/auth/Auth'
import Home from '../components/screens/home/Home'
import Exercise from '../components/screens/new-exercise/NewExercise'
import NotFound from '../components/screens/not-found/Not-found'
import Profile from '../components/screens/profile/Profile'
import Workouts from '../components/screens/workouts/Workouts'

const Router = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
			errorElement: <NotFound />
		},
		{
			path: '/profile',
			element: <Profile />,
			errorElement: <NotFound />
		},
		{
			path: '/workouts',
			element: <Workouts />
		},
		{
			path: '/new-exercise',
			element: <Exercise />
		},
		{
			path: 'auth',
			element: <Auth />
		}
	])

	return <RouterProvider router={router}></RouterProvider>
}

export default Router
