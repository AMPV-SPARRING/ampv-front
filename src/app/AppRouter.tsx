import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { renewToken } from '../actions/auth';
import '../assets/styles/index.css';
import { Layout } from '../components/Layout/Layout';
import LoginScreen from '../components/LoginScreen/LoginScreen';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import { useAppDispatch } from '../hooks/hooks';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const StyledLoadingScreen = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const AppRouter: React.FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(renewToken());
	}, [dispatch]);

	return (
		<Suspense
			fallback={
				<StyledLoadingScreen>
					<LoadingSpinner />
				</StyledLoadingScreen>
			}
		>
			<BrowserRouter>
				<Routes>
					<Route
						path="/auth/*"
						element={
							<PublicRoute>
								<LoginScreen />
							</PublicRoute>
						}
					/>
					<Route
						path="/app/*"
						element={
							<PrivateRoute>
								<Layout />
							</PrivateRoute>
						}
					/>
					<Route path="*" element={<Navigate to="/auth/login" />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
};

export default AppRouter;
