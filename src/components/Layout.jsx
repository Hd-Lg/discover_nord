import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div
			className='flex flex-col
        '>
			<Navbar />
			<div className='mt-24 mx-14 min-h-screen'>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
