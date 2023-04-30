import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from '../routes/routes';

const StyledLogo = styled.img`
	height: 1.5rem;
	width: 1.5rem;
`;

const StyledNavbar = styled.nav`
	padding: 0.5rem;
	display: flex;
	flex-direction: row;
	background-color: ${({ theme }) => theme.color.bg2};
	justify-content: space-between;
	height: 1.5rem;
	width: 100vw;
`;

const StyledMenu = styled.ul`
	align-items: center;
	display: flex;
	gap: 0.5rem;
	flex-direction: row;
	justify-content: center;
	padding-left: 0;
`;

const StyledNavLink = styled(NavLink)`
	color: ${({ theme }) => theme.color.font};
	font-size: 1.2rem;
	text-decoration: none;
	&.nav-active {
		color: grey;
		transition: all 0.3s ease-out;
	}
`;

export const Navbar = () => {
	return (
		<StyledNavbar>
			<StyledMenu>
				{routes.map(route => (
					<li key={route.to}>
						<StyledNavLink
							to={route.to}
							className={({ isActive }) => (isActive ? 'nav-active' : '')}
							end
						>
							{route.name}
						</StyledNavLink>
					</li>
				))}
			</StyledMenu>
		</StyledNavbar>
	);
};
