import { useQuery } from '@tanstack/react-query'
import WorkoutService from '../services/workoutService'

export const useWorkout = () => {
	return useQuery(['get profile'], () => WorkoutService.getAll())
}
