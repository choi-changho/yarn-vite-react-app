import {Slider, Stack, Typography} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import {useRecoilState} from 'recoil';
import {AppBorderRadius} from '@/atom/global/AppBorderRadius';
import {isArray} from 'lodash';

export default function BorderSlider() {
	const [radius, setRadius] = useRecoilState(AppBorderRadius);

	const changeRadius = (event: Event, value: number | number[]) => {
		if (!isArray(value)) setRadius(value);
	};

	return (
		<Grid2 spacing={2} xs={12}>
			<Stack spacing={2} direction='row' sx={{mb: 1}} alignItems='center' width='100%'>
				<Typography variant='h5'>4px</Typography>
				<Slider
					aria-label='Border Radius'
					value={radius}
					valueLabelDisplay='auto'
					step={2}
					marks
					min={4}
					max={24}
					size='small'
					onChange={changeRadius}
				/>
				<Typography variant='h5'>24px</Typography>
			</Stack>
		</Grid2>
	);
}
