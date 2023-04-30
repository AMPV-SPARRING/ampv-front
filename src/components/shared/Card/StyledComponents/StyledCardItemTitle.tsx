import styled from 'styled-components';

export const StyledCardItemTitle = styled.h3.attrs(
	(props: { className?: string }) => ({
		className: props.className
	})
)`
	margin: 10px;
	color: ${({ theme }) => theme.color.font};
`;
