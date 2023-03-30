import {createTheme} from '@mui/material';
import {useMemo} from 'react';
import DirectionOption from '@/theme/options/DirectionOption';
import BorderOption from '@/theme/options/BorderOption';
import ColorModeOption from '@/theme/options/ColorModeOption';

export default function CustomTheme() {
	const {dirTheme, dirCache} = DirectionOption();
	const {borderTheme} = BorderOption();
	const {colorTheme} = ColorModeOption();

	const customTheme = useMemo(
		() =>
			createTheme(
				{
					typography: {
						htmlFontSize: 16,
						fontSize: 14,
						h1: {
							fontSize: '2em',
							fontWeight: 'bold',
						},
						h2: {
							fontSize: '1.5em',
							fontWeight: 'bold',
						},
						h3: {
							fontSize: '1.17em',
							fontWeight: 'bold',
						},
						h4: {
							fontSize: '1em',
							fontWeight: 'bold',
						},
						h5: {
							fontSize: '0.83em',
							fontWeight: 'bold',
						},
						h6: {
							fontSize: '0.67em',
							fontWeight: 'bold',
						},
						body1: {
							fontSize: '0.83em',
						},
						body2: {
							fontSize: '0.67em',
						},
					},
					components: {
						MuiFormLabel: {
							styleOverrides: {
								root: {
									fontSize: '0.83em',
								},
							},
						},
					},
					palette: {
						...colorTheme.palette,
					},
				},
				borderTheme,
				dirTheme
			),
		[borderTheme, dirTheme, colorTheme]
	);

	return {customTheme, dirCache};
}
