import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Auth from '../components/screens/auth/Auth'
import Exercises from '../components/screens/exercises/Exercises'
import Home from '../components/screens/home/Home'
import NewExercise from '../components/screens/new-exercise/NewExercise'
import NewWorkout from '../components/screens/new-workout/NewWorkout'
import NotFound from '../components/screens/not-found/Not-found'
import Profile from '../components/screens/profile/Profile'
import Workout from '../components/screens/single-workout/Workout'
import WorkoutsList from '../components/screens/workout/WorkoutsList'

const Router = () => {
	const router = createBrowserRouter([
		{
			path: 'auth',
			element: <Auth />
		},
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
			path: '/new-workout',
			element: <NewWorkout />,
			errorElement: <NotFound />
		},
		{
			path: '/new-exercise',
			element: <NewExercise />,
			errorElement: <NotFound />
		},
		{
			path: '/exercises',
			element: <Exercises />,
			errorElement: <NotFound />
		},
		{
			path: '/workouts',
			element: <WorkoutsList />,
			errorElement: <NotFound />
		},
		{
			path: '/workout/:id',
			element: <Workout />,
			errorElement: <NotFound />
		}
	])

	return <RouterProvider router={router}></RouterProvider>
}

export default Router
