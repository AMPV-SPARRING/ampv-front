import React, { useContext } from 'react';
import type { FC } from 'react';

import { ItemContext } from '../Card';

import {
	StyledCardButtonsContainer,
	StyledCardCounterButton,
	StyledCardCountLabel
} from '../StyledComponents';

export const ItemButtons: FC = () => {
	const { increaseBy, counter } = useContext(ItemContext);

	return (
		<StyledCardButtonsContainer>
			<StyledCardCounterButton onClick={() => increaseBy(-1)}>
				-
			</StyledCardCounterButton>
			<StyledCardCountLabel>{counter}</StyledCardCountLabel>
			<StyledCardCounterButton onClick={() => increaseBy(1)}>
				+
			</StyledCardCounterButton>
		</StyledCardButtonsContainer>
	);
};
