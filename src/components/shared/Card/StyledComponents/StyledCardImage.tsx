import styled from 'styled-components';

interface StyledCardImageProps {
	alt?: string;
	className?: string;
	src?: string;
}

export const StyledCardImage = styled.img.attrs(
	(props: StyledCardImageProps) => ({
		alt: props.alt,
		className: props.className,
		src: props.src
	})
)`
	border-radius: ${({ theme }) => theme.spacing.space2}
		${({ theme }) => theme.spacing.space2} 0 0;
	width: 100%;
	&.framed {
		margin: ${({ theme }) => theme.spacing.space2};
		width: calc(100% - ${({ theme }) => theme.spacing.space6});
		border-radius: ${({ theme }) => theme.spacing.space2};
	}
`;
