import React from 'react';
import styled from 'styled-components';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import SignUpForm from './SignUpForm/SignUpForm';

const StyledLoginScreenContainer = styled.div`
	background-color: ${({ theme }) => theme.color.bg};
	display: grid;
	justify-content: center;
	align-content: start;
	padding: ${({ theme }) => theme.spacing.space3};
	${({ theme }) => theme.media.atH600} {
		padding: ${({ theme }) => theme.spacing.space5};
	}
	${({ theme }) => theme.media.atMedium} {
		height: 70vh;
		align-content: center;
	}
`;

const StyledFormContainer = styled.div`
	max-height: 80vh;
	min-width: 220px;
	background-color: ${({ theme }) => theme.color.bg};
	border-radius: ${({ theme }) => theme.spacing.space2};
	box-shadow: ${({ theme }) => theme.shadow.file};
	display: flex;
	flex-direction: column;
	margin-top: auto;
	margin-bottom: auto;
	padding: ${({ theme }) => theme.spacing.space4};
	${({ theme }) => theme.media.atSmall} {
		padding: ${({ theme }) => theme.spacing.space6};
	}
	${({ theme }) => theme.media.atMedium} {
		padding: ${({ theme }) => theme.spacing.space7};
		box-shadow: ${({ theme }) => theme.shadow.file3D};
	}
	form {
		display: grid;
		grid-gap: ${({ theme }) => theme.spacing.space};
		justify-items: center;

		${({ theme }) => theme.media.atSmall} {
			width: 300px;
		}
		${({ theme }) => theme.media.atMedium} {
			grid-gap: ${({ theme }) => theme.spacing.space5};
		}
		> * {
			width: 100%;
		}

		> button {
			margin-top: ${({ theme }) => theme.spacing.space3};
			background-color: ${({ theme }) => theme.color.green50};
			color: ${({ theme }) => theme.color.white};
			max-width: 200px;
			&:hover {
				background-color: ${({ theme }) => theme.color.green};
				transition: all 0.2s ease-out;
				&:active {
					transform: scale(0.98);
					background-color: ${({ theme }) => theme.color.yellow200};
				}
			}
			${({ theme }) => theme.media.atMedium} {
				box-shadow: ${({ theme }) => theme.shadow.button};
			}
		}
	}
	.switch-form {
		margin-top: ${({ theme }) => theme.spacing.space3};

		color: ${({ theme }) => theme.color.black};
		span {
			color: blue;
			cursor: pointer;
		}
	}
	.submit-errors {
		display: flex;
		justify-content: center;
		color: red;
		margin-top: ${({ theme }) => theme.spacing.space6};
	}
`;

const LoginScreen: React.FC = () => {
	return (
		<StyledLoginScreenContainer>
			<StyledFormContainer>
				<Routes>
					<Route path="/login" element={<LoginForm />} />
					<Route path="/signup" element={<SignUpForm />} />
					<Route path="*" element={<Navigate to="/login" replace />} />
				</Routes>
				<Outlet />
			</StyledFormContainer>
		</StyledLoginScreenContainer>
	);
};

export default LoginScreen;
