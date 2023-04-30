import styled from 'styled-components';

export const StyledCardContainer = styled.div`
	background-color: ${({ theme }) => theme.color.white};
	border-radius: ${({ theme }) => theme.spacing.space2};
	color: ${({ theme }) => theme.color.black};
	padding-bottom: ${({ theme }) => theme.spacing.space2};
	margin-right: ${({ theme }) => theme.spacing.space2};
	margin-top: ${({ theme }) => theme.spacing.space2};
	width: ${({ theme }) => theme.width.card};
`;
