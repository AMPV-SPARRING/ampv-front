import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface Props {
	children: JSX.Element;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
	const { roles } = useSelector((state: RootState) => state.auth);
	const isAuthenticated = Boolean(roles?.length);
	return isAuthenticated ? <Navigate to="/app/home" /> : children;
};

export default PublicRoute;
