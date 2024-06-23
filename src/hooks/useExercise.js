import { useQuery } from '@tanstack/react-query'
import ExerciseService from '../services/exercise/exercise.service'

export const useExercise = () => {
	return useQuery(['get exercise'], () => ExerciseService.getAll())
}
