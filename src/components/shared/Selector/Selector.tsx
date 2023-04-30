import React from 'react';
import styled from 'styled-components';

interface SelectorProps {
	onChange: () => void;
	checked: boolean;
}
const StyledSelector = styled.input``;

export const Selector = ({ onChange, checked }: SelectorProps) => {
	return (
		<StyledSelector
			type="checkbox"
			onChange={() => onChange()}
			checked={checked}
		/>
	);
};
