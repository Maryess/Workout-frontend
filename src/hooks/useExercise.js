import { useQuery } from '@tanstack/react-query';
import { exerciseService } from '../services/exercise/exercise.service';

export const useExercise = () => {
	const { getAll } = exerciseService();
	return useQuery(['get exercise'], () => getAll());
};
