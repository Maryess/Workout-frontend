import { useQuery } from '@tanstack/react-query'
import ExerciseService from '../services/exerciseService'

export const useProfile = () => {
	return useQuery(['create exercise'], () => ExerciseService.create())
}
