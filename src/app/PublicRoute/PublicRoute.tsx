import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

interface Props {
	children: JSX.Element;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
	// const { uid } = useSelector((state: any) => state.auth);
	// const isAuthenticated = Boolean(uid);
	// return isAuthenticated ? <Navigate to="/" /> : children;
	return children;
};

export default PublicRoute;
