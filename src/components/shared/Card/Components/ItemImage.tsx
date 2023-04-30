import React, { useContext } from 'react';
import type { FC } from 'react';
import { ItemContext } from '../Card';

import noImage from '../../../../assets/images/noImage.jpg';
import { StyledCardImage } from '../StyledComponents';

export const ItemImage: FC<{ img?: string; alt?: string }> = ({
	img = '',
	alt = 'No image available'
}) => {
	const { item } = useContext(ItemContext);
	let imgToShow: string;

	if (img) {
		imgToShow = img;
	} else if (item?.img) {
		imgToShow = item?.img;
	} else {
		imgToShow = noImage;
	}

	return <StyledCardImage src={imgToShow} alt={alt} />;
};
