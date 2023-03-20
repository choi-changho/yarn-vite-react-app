import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import './index.css';
import UseQueryTest from '@/UseQueryTest';
import {QueryClient, QueryClientProvider} from 'react-query';
import {RecoilRoot} from 'recoil';
import CharacterCounter from '@/component/counter/CharacterCounter';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RecoilRoot>
			<QueryClientProvider client={queryClient}>
				<App />
				<UseQueryTest/>
				<CharacterCounter/>
			</QueryClientProvider>
		</RecoilRoot>
	</React.StrictMode>
);


