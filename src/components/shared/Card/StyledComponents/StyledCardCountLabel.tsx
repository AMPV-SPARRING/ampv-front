import styled from 'styled-components';


export const StyledCardCountLabel = styled.span`
	border-bottom: 1px solid black;
	border-top: 1px solid black;
	font-size: ${({ theme }) => theme.fontSize.font2};
	height: ${({ theme }) => theme.spacing.space6};
	padding-top: 5px;
	text-align: center;
	min-width: 30px;
	box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);
`;
