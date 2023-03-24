import {Fab, IconButton, useTheme} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import {ReactNode} from 'react';

type RotateIconButtonType = {
	wrapperSize?: 'small' | 'medium' | 'large';
	iconSize?: 'small' | 'medium' | 'large';
	top?: string | number;
	right?: string | number;
	spinSec?: number;
	icon?: ReactNode;
	// Icon: SvgIconTypeMap;
};

export default function RotateIconButton({wrapperSize = 'medium', iconSize = 'medium', top = '25%', right = '10px', spinSec = 2, icon = <SettingsIcon />}: RotateIconButtonType) {
	const theme = useTheme();

	return (
		<Fab
			size={wrapperSize}
			color='secondary'
			aria-label='Live Customize'
			component='div'
			sx={{
				position: 'fixed',
				top,
				right,
				borderRadius: '50% 50% 4px',
			}}
		>
			<IconButton
				sx={{
					animation: `spin ${spinSec}s linear infinite`,
					'@keyframes spin': {
						'0%': {
							transform: 'rotate(360deg)',
						},
						'100%': {
							transform: 'rotate(0deg)',
						},
					},
				}}
				size={iconSize}
			>
				{icon}
			</IconButton>
		</Fab>
	);
}
