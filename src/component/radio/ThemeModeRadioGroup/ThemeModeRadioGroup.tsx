import React from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@mui/material';
import {useRecoilState} from 'recoil';
import {appThemeMode} from '@/atom/global/appThemeMode';

export default function ThemeModeRadioGroup() {
	const [mode, setMode] = useRecoilState(appThemeMode);

	return (
		<FormControl>
			<FormLabel color='primary' component='legend'>
				Mode
			</FormLabel>
			<RadioGroup
				value={mode}
				name='radio-buttons-group'
				sx={{display: 'flex', flexFlow: 'row wrap'}}
				onChange={() => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))}
			>
				<FormControlLabel value='light' control={<Radio />} label='Light' />
				<FormControlLabel value='dark' control={<Radio />} label='Dark' />
			</RadioGroup>
		</FormControl>
	);
}
