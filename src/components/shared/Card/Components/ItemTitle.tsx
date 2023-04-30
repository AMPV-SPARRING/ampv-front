import React, { useContext } from 'react';
import type { FC } from 'react';

import { ItemContext } from '../Card';
import { StyledCardItemTitle } from '../StyledComponents';

export interface ItemTitleProps {
	title?: string;
	className?: string;
}

export const ItemTitle: FC<ItemTitleProps> = ({ title, className }) => {
	const { item } = useContext(ItemContext);

	return (
		<StyledCardItemTitle className={className}>
			{title ? title : item?.title}
		</StyledCardItemTitle>
	);
};
