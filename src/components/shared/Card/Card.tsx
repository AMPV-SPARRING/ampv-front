import React, { createContext } from 'react';
import { useItem } from '../../../hooks/useItem';
import {
	ItemContextProps,
	ItemCardHOCProps
} from '../../../interfaces';
import { StyledCardContainer } from './StyledComponents';
import {
	ItemImage,
	ItemTitle,
	ItemButtons,
	ItemDescription
} from './Components';

export const ItemContext = createContext({} as ItemContextProps);
export const ItemProvider = ItemContext.Provider;

const CardHOC = ({ children, item, className }: ItemCardHOCProps) => {
	const { counter, increaseBy } = useItem();

	return (
		<ItemProvider value={{ increaseBy, counter, item }}>
			<StyledCardContainer className={className}>
				{children}
			</StyledCardContainer>
		</ItemProvider>
	);
};

export const Card = Object.assign(CardHOC, {
	Image: ItemImage,
	Title: ItemTitle,
	Description: ItemDescription,
	Buttons: ItemButtons
});
