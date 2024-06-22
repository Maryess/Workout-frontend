import { useQuery } from '@tanstack/react-query'
import WorkoutService from '../services/workout.service'

export const useWorkout = () => {
	return useQuery(['get profile'], () => WorkoutService.getAll())
}
