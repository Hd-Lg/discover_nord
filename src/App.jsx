import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Homepage />} />
			</Routes>
		</Layout>
	);
};

export default App;
