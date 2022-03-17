import React from 'react';
import {Nav, NavLink, Bars, NavMenu} from './NavbarElements';

const Navbar = () => {
return (
	<div>
	<Nav>
		<Bars />
		<NavMenu>
				<NavLink to='/gestion-compte' >gestion Compte</NavLink>
				<NavLink to='/gestion-dechets'>gestion dechet</NavLink>
				<NavLink to='/gestion-pannes' >gestion pannes</NavLink>	
				<NavLink to='/gestion-poubelle-etablissement'>gestion-poubelle-etablissement</NavLink>
				<NavLink to='/production-poubelle'>production poubelle</NavLink>
				<NavLink to='/transport-dechets'>transport dechet</NavLink>								
		</NavMenu>
	
	</Nav>
	</div>
);
};

export default Navbar;
