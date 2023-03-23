import axios from 'axios';
import {useQuery} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';

function UseQueryTest() {
	const {isLoading, error, data, isFetching} = useQuery('repoData', () =>
		axios
			.get('https://api.github.com/repos/tannerlinsley/react-query')
			.then((res) => res.data)
	);

	return (
		<div>
			{isLoading && <h1>Loading...</h1>}
			{error instanceof Error && (
				<h1>`An error has occurred: ${error.message}`</h1>
			)}
			{data && (
				<>
					<h1>{data.name}</h1>
					<p>{data.description}</p>
					<strong>👀 {data.subscribers_count}</strong>{' '}
					<strong>✨ {data.stargazers_count}</strong>{' '}
					<strong>🍴 {data.forks_count}</strong>
					<div>{isFetching ? 'Updating...' : ''}</div>
				</>
			)}
			<ReactQueryDevtools initialIsOpen />
		</div>
	);
}
export default UseQueryTest;
