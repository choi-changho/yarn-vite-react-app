import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from 'react-query';
import {RecoilRoot} from 'recoil';
import {CssBaseline} from '@mui/material';
import App from '@/App';

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <ToggleColorMode />,
// 	},
// ]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RecoilRoot>
			<QueryClientProvider client={queryClient}>
				<CssBaseline />
				{/* <RouterProvider router={router}/> */}
				<App />
			</QueryClientProvider>
		</RecoilRoot>
	</React.StrictMode>
);
