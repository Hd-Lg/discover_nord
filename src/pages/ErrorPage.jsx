import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError();
	console.error(error);
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<h1>Oops!</h1>
			<p>Sorry, this page does not exist.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
			<button className='m-4 border-2 p-2 rounded-xl'>
				<a href='/'>Go back home</a>
			</button>
		</div>
	);
};

export default ErrorPage;
