import styled from 'styled-components';

interface StyledCardCounterButtonProps {
	onClick?: () => void;
}

export const StyledCardCounterButton = styled.button.attrs(
	(props: StyledCardCounterButtonProps) => ({
		onClick: props.onClick
	})
)`
	cursor: pointer;
	color: ${({ theme }) => theme.color.highlightFont};
	background-color: transparent;
	border: 1px solid black;
	width: 30px;
	transition: all 0.1s ease-out;
	:hover {
		background-color: ${({ theme }) => theme.color.purple100};
		color: ${({ theme }) => theme.color.white};
	}
	:active {
		transform: scale(0.98);
		background-color: ${({ theme }) => theme.color.yellow};
	}
`;
