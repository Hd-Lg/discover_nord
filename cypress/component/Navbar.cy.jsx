import Navbar from '../../src/components/Navbar';
import '../../src/index.css';

const navLinks = ['Menu 1', 'Menu 2', 'Menu 3'];

describe('Navbar.cy.jsx', () => {
	context('720p resolution', () => {
		beforeEach(() => {
			cy.mount(<Navbar />);
			cy.viewport(1280, 720);
		});

		it('Displays the correct title', () => {
			cy.getByData('navbar-title')
				.find('a')
				.contains(/discover nord/i);
		});
		it('Displays the full navbar', () => {
			cy.getByData('navbar-menu').should('be.visible');
		});
		it('Displays the correct menu items', () => {
			cy.getByData('navbar-items').eq(0).contains(navLinks[0]);
			cy.getByData('navbar-items').eq(1).contains(navLinks[1]);
			cy.getByData('navbar-items').eq(2).contains(navLinks[2]);
		});
		it('Does not display the hamburger menu', () => {
			cy.getByData('navbar-hamburger').should('not.be.visible');
		});
	});
	context('Phone resolution', () => {
		beforeEach(() => {
			cy.mount(<Navbar />);
			cy.viewport('iphone-6');
		});
		it('Does not display the full navbar', () => {
			cy.getByData('navbar-menu').should('not.be.visible');
		});
		it('Displays the hamburger menu', () => {
			cy.getByData('navbar-hamburger').should('be.visible');
		});
		it('Displays the cross when menu clicked', () => {
			cy.getByData('navbar-hamburger').click();
			cy.getByData('navbar-cross').should('be.visible');
		});
		it('Displays the hamburger icon when menu closed', () => {
			cy.getByData('navbar-hamburger').click();
			cy.getByData('navbar-cross').should('be.visible');
			cy.getByData('navbar-cross').click();
			cy.getByData('navbar-hamburger').should('be.visible');
		});
		it('Displays the phone menu', () => {
			cy.getByData('navbar-hamburger').click();
			cy.getByData('navbar-phoneMenu').should('be.visible');
		});
		it('Displays the correct menu items', () => {
			cy.getByData('navbar-hamburger').click();
			cy.getByData('navbar-phoneItems').eq(0).contains(navLinks[0]);
			cy.getByData('navbar-phoneItems').eq(1).contains(navLinks[1]);
			cy.getByData('navbar-phoneItems').eq(2).contains(navLinks[2]);
		});
	});
});
