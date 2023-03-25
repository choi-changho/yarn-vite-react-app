import {Fab} from '@mui/material';
import {ReactElement} from 'react';

interface FloatingActionButtonType {
	wrapperSize?: 'small' | 'medium' | 'large';
	top?: string | number;
	right?: string | number;
	position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
	color?: 'inherit' | 'primary' | 'secondary' | 'default' | 'success' | 'error' | 'info' | 'warning';
	children: ReactElement;
}

export default function FloatingActionButton({
	wrapperSize = 'medium',
	top = '25%',
	right = '10px',
	position = 'fixed',
	color = 'primary',
	children,
}: FloatingActionButtonType) {
	return (
		<Fab
			size={wrapperSize}
			color={color}
			component='div'
			sx={{
				position,
				top,
				right,
				borderRadius: '50% 50% 4px',
			}}
		>
			{children}
		</Fab>
	);
}
