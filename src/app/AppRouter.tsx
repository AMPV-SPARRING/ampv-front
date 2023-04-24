import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import '../assets/styles/index.css';
import { Layout } from '../components/Layout/Layout';
import LoginScreen from '../components/LoginScreen/LoginScreen';
import LoadingScreen from '../components/shared/LoadingScreen';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const AppRouter: React.FC = () => {
	return (
		<Suspense fallback={<LoadingScreen />}>
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
