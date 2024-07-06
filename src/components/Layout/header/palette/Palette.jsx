import { Fragment, useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import { RiColorFilterLine } from 'react-icons/ri';
import styles from './Palette.module.scss';
import { useTheme } from './hooks/useTheme';
import { palettes } from './palettes.data';
const Palette = ({ auth }) => {
	const { theme, setTheme } = useTheme();
	const [isShowPalette, setIsShowPalette] = useState(false);
	const changeColor = color => {
		localStorage.setItem('theme', theme);
		setTheme(color);
	};

	return !auth ? (
		<Fragment>
			<div>
				<RiColorFilterLine
					onClick={() => setIsShowPalette(!isShowPalette)}
					fontSize={30}
					style={{
						backgroundColor: 'transparent',
						cursor: 'pointer',
						color: '#fff'
					}}
				/>
			</div>
			{isShowPalette ? (
				<div className={styles.palette}>
					{palettes.map(palette => (
						<div key={palette.id} className={styles.content}>
							<FaCircle
								fontSize={25}
								color={palette.color}
								onClick={() => {
									changeColor(palette.name);
								}}
							/>
						</div>
					))}
				</div>
			) : (
				''
			)}
		</Fragment>
	) : (
		<RiColorFilterLine fontSize={30} className={styles.auth_page} />
	);
};

export default Palette;
