import React, { useState } from 'react';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import AppRouter from './AppRouter';
import { darkTheme, lightTheme } from '../assets/themes';
import { Selector } from '../components/shared/Selector/Selector';
import { store } from '../store';

const StyledApp = styled.div`
	background-color: ${({ theme }) => theme.color.bg};
	color: ${({ theme }) => theme.color.font};
	height: 100vh;
	width: 100vw;
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
`;

export const App = () => {
	const [isDarkMode, setIsDarkMode] = useState(true);
	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<StyledApp>
				<Provider store={store}>
					<Selector onChange={toggleDarkMode} checked={isDarkMode} />
					<AppRouter />
				</Provider>
			</StyledApp>
		</ThemeProvider>
	);
};
