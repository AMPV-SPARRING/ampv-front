import React, { useContext } from 'react';
import type { FC } from 'react';

import { ItemContext } from '../Card';
import { StyledCardItemTitle } from '../StyledComponents';

export const ItemTitle: FC<{ title?: string }> = ({
	title
}: {
	title?: string;
}) => {
	const { item } = useContext(ItemContext);

	return (
		<StyledCardItemTitle>{title ? title : item?.title}</StyledCardItemTitle>
	);
};
