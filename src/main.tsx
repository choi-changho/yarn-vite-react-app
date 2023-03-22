import React from 'react';
import ReactDOM from 'react-dom/client';
import UseQueryTest from '@/UseQueryTest';
import {QueryClient, QueryClientProvider} from 'react-query';
import {RecoilRoot} from 'recoil';
import CharacterCounter from '@/component/counter/CharacterCounter';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ToggleColorMode from '@/NewApp';
import {CssBaseline} from '@mui/material';

const router = createBrowserRouter([
	{
		path: "/",
		element: <ToggleColorMode/>,
	}
])
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RecoilRoot>
			<QueryClientProvider client={queryClient}>
				<CssBaseline />
				<RouterProvider router={router}/>
				<UseQueryTest/>
				<CharacterCounter/>
			</QueryClientProvider>
		</RecoilRoot>
	</React.StrictMode>
);


