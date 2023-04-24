import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../../components/shared/LoadingSpinner';

interface Props {
	children: JSX.Element;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
	const { roles, renewLoading } = useSelector((state: any) => state.auth);
	const isAuthenticated = Boolean(roles?.length);
	if (isAuthenticated) {
		return children;
	}
	if (renewLoading) {
		return <LoadingSpinner />;
	}

	return <Navigate to="/auth/login" replace />;
};

export default PrivateRoute;
