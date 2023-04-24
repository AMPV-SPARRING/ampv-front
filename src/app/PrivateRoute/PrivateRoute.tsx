import React from 'react';
// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import LoadingScreen from '../../components/common/LoadingScreen';

interface Props {
	children: JSX.Element;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
	// const { uid, renewLoading } = useSelector((state: any) => state.auth);
	// debugger;
	// const isAuthenticated = Boolean(uid);
	// if (isAuthenticated) {
	return children;
	// }
	// if (renewLoading) {
	// return <LoadingScreen />;
	// }

	return <Navigate to="auth" replace />;
};

export default PrivateRoute;
