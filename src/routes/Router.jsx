import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Auth from '../components/screens/auth/Auth'
import Home from '../components/screens/home/Home'
import NewExercise from '../components/screens/new-exercise/newExercise'
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
