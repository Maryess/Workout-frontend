import { useQuery } from '@tanstack/react-query'
import ExerciseService from '../services/exerciseService'

export const useExercise = () => {
	return useQuery(['get exercise'], () => ExerciseService.getAll())
}
