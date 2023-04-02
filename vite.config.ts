import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import viteSvgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		viteSvgr({
			exportAsDefault: true,
		}),
	],
	resolve: {
		alias: [
			/* https://dev.to/avxkim/setup-path-aliases-w-react-vite-ts-poa
			- src alias to "@"
			 */
			{find: '@', replacement: path.resolve(__dirname, 'src')},
		],
	},
});
