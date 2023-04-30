import React, { useContext } from 'react';
import type { FC } from 'react';
import { ItemContext } from '../Card';
import { StyledCardSpan } from '../StyledComponents';

export interface ItemDescriptionProps {
	description?: string;
}

export const ItemDescription: FC<ItemDescriptionProps> = ({
	description = ''
}) => {
	const { item } = useContext(ItemContext);

	const descriptionToShow = description ? description : item?.description;

	return descriptionToShow ? (
		<StyledCardSpan>{descriptionToShow}</StyledCardSpan>
	) : null;
};
