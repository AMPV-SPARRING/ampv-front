import styled from 'styled-components';

interface StyledCardContainerProps {
	className?: string;
	children?: React.ReactElement;
}
export const StyledCardContainer = styled.div.attrs(
	(props: StyledCardContainerProps) => ({
		className: props.className
	})
)`
	background-color: ${({ theme }) => theme.color.bg};
	border-radius: ${({ theme }) => theme.spacing.space2};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding-bottom: ${({ theme }) => theme.spacing.space2};
	margin-right: ${({ theme }) => theme.spacing.space2};
	margin-top: ${({ theme }) => theme.spacing.space2};
	width: ${({ theme }) => theme.width.card};
	border: 1px solid ${({ theme }) => theme.color.bg2};
	box-shadow: ${({ theme }) => theme.shadow.card};
	&.highlight {
		background-color: ${({ theme }) => theme.color.highlight};
		> * {
			color: ${({ theme }) => theme.color.highlightFont};
		}
	}
	&:hover {
		transform: scale(1.01);
		transition: transform 0.2s ease-in-out;
		box-shadow: ${({ theme }) => theme.shadow.cardHover};
	}
`;
