import {Fab, IconButton} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import {createElement, ReactElement} from 'react';

type RotateIconButtonType = {
	wrapperSize?: 'small' | 'medium' | 'large';
	iconSize?: 'small' | 'medium' | 'large';
	top?: string | number;
	right?: string | number;
	spinSec?: number;
	icon: ReactElement;
	// Icon: SvgIconTypeMap;
};

export default function RotateIconButton({
	wrapperSize = 'medium',
	iconSize = 'medium',
	top = '25%',
	right = '10px',
	spinSec = 2,
	icon = <SettingsIcon />,
}: RotateIconButtonType) {
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
				{createElement(icon?.type, {
					...{
						...icon?.props,
						fontSize: 'inherit',
					},
				})}
			</IconButton>
		</Fab>
	);
}
