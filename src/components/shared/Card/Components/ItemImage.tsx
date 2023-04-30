import React, { useContext } from 'react';
import type { FC } from 'react';
import { ItemContext } from '../Card';

import noImage from '../../../../assets/images/noImage.jpg';
import { StyledCardImage } from '../StyledComponents';

interface ItemImageProps {
	alt?: string;
	className?: string;
	img?: string;
}

export const ItemImage: FC<ItemImageProps> = ({
	img = '',
	alt = 'No image available',
	className
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

	return <StyledCardImage src={imgToShow} alt={alt} className={className} />;
};
