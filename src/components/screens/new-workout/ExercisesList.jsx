import { Controller } from 'react-hook-form'
import Select from 'react-select'
import { useExercise } from '../../../hooks/useExercise'
const ExerciseList = ({ control }) => {
	const { data } = useExercise()

	return (
		<>
			<Controller
				name='exerciseIds'
				control={control}
				render={({ field: { value, onChange } }) => {
					console.log(value)
					return (
						<Select
							classNamePrefix={'exercises_list'}
							placeholder='Exercises...'
							options={data?.data.map(exercise => ({
								value: exercise.id,
								label: exercise.name
							}))}
							value={value}
							onChange={onChange}
							isMulti
							isSearchable={false}
						/>
					)
				}}
			/>
		</>
	)
}

export default ExerciseList
