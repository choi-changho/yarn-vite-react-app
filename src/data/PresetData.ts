import {
	amber,
	blue,
	cyan,
	deepOrange,
	deepPurple,
	green,
	indigo,
	lightBlue,
	lightGreen,
	lime,
	orange,
	pink,
	purple,
	red,
	teal,
	yellow,
} from '@mui/material/colors';
import {PresetType} from '@/types/global/PresetType';

export const PresetData: {presets: Array<PresetType>} = {
	presets: [
		{
			mainColor: red[700],
			subColor: pink[200],
			default: true,
		},
		{
			mainColor: purple[700],
			subColor: deepPurple[200],
			default: false,
		},
		{
			mainColor: indigo[700],
			subColor: blue[200],
			default: false,
		},
		{
			mainColor: lightBlue[700],
			subColor: cyan[200],
			default: false,
		},
		{
			mainColor: teal[700],
			subColor: green[200],
			default: false,
		},
		{
			mainColor: lightGreen[700],
			subColor: lime[200],
			default: false,
		},
		{
			mainColor: yellow[700],
			subColor: amber[200],
			default: false,
		},
		{
			mainColor: orange[700],
			subColor: deepOrange[200],
			default: false,
		},
	],
};
