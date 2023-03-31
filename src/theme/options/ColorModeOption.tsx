import {useRecoilValue} from 'recoil';
import {AppThemeMode} from '@/atom/global/AppThemeMode';
import {useMemo} from 'react';
import {pink, red} from '@mui/material/colors';

export default function ColorModeOption() {
	const mode = useRecoilValue(AppThemeMode);

	const colorTheme = useMemo(
		() => ({
			palette: {
				mode,
				...(mode === 'light'
					? {
							primary: {
								main: red[700],
							},
							secondary: {
								main: pink[200],
							},
					  }
					: {
							primary: {
								main: red[700],
							},
							secondary: {
								main: pink[200],
							},
					  }),
			},
		}),
		[mode]
	);

	return {colorTheme};
}
