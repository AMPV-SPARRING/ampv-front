import styled from 'styled-components';


export const StyledCardButtonsContainer = styled.div`
	margin: ${({ theme }) => theme.spacing.space2};
	display: flex;
	flex-direction: row;

	button:first-child {
		border-top-left-radius: ${({ theme }) => theme.spacing.space2};
		border-bottom-left-radius: ${({ theme }) => theme.spacing.space2};
		box-shadow: -1px 1px 3px 0px rgba(0, 0, 0, 0.75);
	}
	button:last-child {
		border-top-right-radius: ${({ theme }) => theme.spacing.space2};
		border-bottom-right-radius: ${({ theme }) => theme.spacing.space2};
		box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
	}
`;
