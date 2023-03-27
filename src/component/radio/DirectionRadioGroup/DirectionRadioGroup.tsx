import React, {ChangeEvent} from 'react';
import {Direction, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@mui/material';
import {useRecoilState} from 'recoil';
import {AppDirection} from '@/atom/global/AppDirection';

export default function DirectionRadioGroup() {
	const [dir, setDir] = useRecoilState(AppDirection);

	const toggleDir = (event: ChangeEvent) => {
		const result = (event.target as HTMLInputElement).value as Direction;
		setDir(result);
	};

	return (
		<FormControl component='fieldset'>
			<FormLabel color='primary' component='legend'>
				Direction
			</FormLabel>
			<RadioGroup
				value={dir}
				name='radio-buttons-group'
				sx={{display: 'flex', flexFlow: 'row wrap'}}
				onChange={toggleDir}
			>
				<FormControlLabel value='rtl' control={<Radio />} label='RTL' />
				<FormControlLabel value='ltr' control={<Radio />} label='LTR' />
			</RadioGroup>
		</FormControl>
	);
}
