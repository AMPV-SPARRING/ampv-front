import React from 'react';
import styled, { css } from 'styled-components';
import { body } from '../../../assets/mixings';
import LoadingSpinner from '../LoadingSpinner';

const StyledButton = styled.button<{
	$secondary?: boolean;
	$block?: boolean;
	$large?: boolean;
	disabled?: boolean;
}>`
	border-radius: 4px;
	padding: ${({ theme }) => theme.spacing.space};
	${body};

	.spiner-container {
		height: 24px;
	}

	${({ $block }) => {
		if ($block) {
			return css`
				width: fint-content;
				min-width: 60px;
			`;
		} else {
			return css`
				display: flex;
				justify-content: center;
			`;
		}
	}};

	${({ theme, $secondary, disabled }) => {
		if ($secondary) {
			return css`
				background-color: ${theme.color.white};
				border: 1px solid
					${disabled ? theme.color.primary100 : theme.color.primary500};
				color: ${disabled ? theme.color.primary100 : theme.color.primary500};
			`;
		}
		return css`
			background-color: ${disabled
				? theme.color.primary200
				: theme.color.primary500};
			border-color: ${disabled
				? theme.color.primary200
				: theme.color.primary500};
			color: ${theme.color.white};
		`;
	}};
`;

interface Props extends React.ComponentPropsWithoutRef<'button'> {
	className?: string;
	secondary?: boolean;
	block?: boolean;
	large?: boolean;
	disabled?: boolean;
	loading?: boolean;
}

const Button: React.FC<Props> = ({
	className,
	secondary,
	block,
	large,
	disabled,
	loading,
	children,
	...rest
}) => {
	return (
		<StyledButton
			className={className}
			$secondary={secondary}
			$block={block}
			$large={large}
			disabled={disabled}
			{...rest}
		>
			{loading ? <LoadingSpinner /> : children}
		</StyledButton>
	);
};

export default Button;
