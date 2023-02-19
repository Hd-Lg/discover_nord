import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const navLinks = [
	{
		id: 1,
		name: 'Menu 1',
		href: '/1',
	},
	{
		id: 2,
		name: 'Menu 2',
		href: '/2',
	},
	{
		id: 3,
		name: 'Menu 3',
		href: '/3',
	},
];

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className='flex justify-between px-14 py-4 bg-slate-300 top-0 w-full fixed '>
			<h1 data-test='navbar-title'>
				<a href='/'>Discover Nord</a>
			</h1>
			<div data-test='navbar-menu' className='hidden md:inline'>
				<ul className='flex space-x-16'>
					{navLinks.map((link) => (
						<li key={link.id}>
							<a href={link.href} data-test='navbar-items'>
								{link.name}
							</a>
						</li>
					))}
				</ul>
			</div>

			{/* Mobile View */}
			<div className='md:hidden'>
				{!menuOpen ? (
					<Bars3Icon
						onClick={() => setMenuOpen(!menuOpen)}
						data-test='navbar-hamburger'
						className='w-6 h-6 cursor-pointer hover:text-white'
					/>
				) : (
					<XMarkIcon
						onClick={() => setMenuOpen(!menuOpen)}
						data-test='navbar-cross'
						className='w-6 h-6 cursor-pointer hover:text-white'
					/>
				)}
				{menuOpen && (
					<div
						data-test='navbar-phoneMenu'
						className='absolute right-0 top-14 bg-slate-300 w-44 h-screen'>
						<ul className='space-y-3 ml-2'>
							{navLinks.map((link) => (
								<li key={link.id}>
									<a href={link.href} data-test='navbar-phoneItems'>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
