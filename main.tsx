import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './app/AppRouter';
import './assets/styles/index.css';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<AppRouter />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);
