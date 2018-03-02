import React, {Component} from 'react';

import NavbarTitleComponent from './NavbarTitleComponent';
import NavbarItemsComponent from './NavbarItemsComponent';
import NavarSearchComponent from './NavbarSearchComponent';


export default class NavbarComponent extends Component {

    render() {

    	const items = [
    		{
    			href: '/',
    			textContent: 'Home'
    		},
    		{
    			href: '/about',
    			textContent: 'About'
    		},
    		{
    			href: '/sing-in',
    			textContent: 'Sing In'
    		},
    		{
    			href: '/sing-out',
    			textContent: 'Sing Out'
    		}
    	];

       return (
       		<div className="Navbar">
       			<nav>
       				<NavbarTitleComponent />
       				<NavarSearchComponent />
       				<NavbarItemsComponent />
       			</nav>
       		</div>
       	);
   }
};
