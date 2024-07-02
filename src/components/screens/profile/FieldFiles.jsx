import { useState } from 'react';
import { IoCloseCircle } from 'react-icons/io5';
import stylesProfile from './Profile.module.scss';

const FieldFiles = () => {
	const [image, setImage] = useState(null);
	const [fileName, setFileName] = useState('No selected file');

	return (
		<div>
			{image ? (
				<div className={stylesProfile.foto}>
					<img src={`${image}`} alt={`${fileName}`} draggable={false} />
				</div>
			) : (
				''
			)}
			<IoCloseCircle
				onClick={() => {
					setImage(null);
				}}
			/>

			<input
				onChange={({ target: { files } }) => {
					files[0] && setFileName(files[0].name);
					if (files) {
						setImage(URL.createObjectURL(files[0]));
					}
				}}
				type='file'
				multiple={true}
			/>
		</div>
	);
};

export default FieldFiles;
