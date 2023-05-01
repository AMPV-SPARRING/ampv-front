import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div`
	width: 40px;
	height: 40px;
	& div {
		box-sizing: border-box;
		display: block;
		position: absolute;

		width: ${({ theme }) => theme.spacing.space10};
		height: ${({ theme }) => theme.spacing.space10};
		border: 4px solid ${({ theme }) => theme.color.green50};
		border-radius: 50%;
		animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite,
			changeColor 30s ease-in-out infinite;
	}
	& div:nth-child(1) {
		animation-delay: -0.45s;
	}
	& div:nth-child(2) {
		animation-delay: -0.3s;
	}
	& div:nth-child(3) {
		animation-delay: -0.15s;
	}
	@keyframes lds-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes changeColor {
		0% {
			border-color: ${({ theme }) => theme.color.white} transparent transparent;
		}
		10%{
			border-color: ${({ theme }) => theme.color.green50} transparent transparent;
		}
		25%{
			border-color: ${({ theme }) => theme.color.yellow50} transparent transparent;
		}
		50% {
			border-color: ${({ theme }) => theme.color.orange50} transparent transparent;
		}
		75% {
			border-color: ${({ theme }) => theme.color.red200} transparent transparent;
		}
		100% {
			border-color: ${({ theme }) => theme.color.red} transparent transparent;
		}
`;

const LoadingSpinner: React.FC = () => {
	return (
		<StyledSpinner>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</StyledSpinner>
	);
};

export default LoadingSpinner;
