import { ReactElement } from 'react';
import { ItemDescriptionProps } from '../components/shared/Card/Components/ItemDescription';
import { ItemImageProps } from '../components/shared/Card/Components/ItemImage';
import { ItemTitleProps } from '../components/shared/Card/Components/ItemTitle';

export interface ItemCardHOCProps {
	Buttons?: ({
		children
	}: {
		children: ReactElement | ReactElement[];
	}) => ReactElement;
	children?: ReactElement | ReactElement[];
	className?: string;
	Description?: (Props: ItemDescriptionProps) => ReactElement;
	Image?: (Props: ItemImageProps) => ReactElement;
	item: Item;
	Title?: (Props: ItemTitleProps) => ReactElement;
}

export interface Item {
	id: string;
	title: string;
	description?: string;
	img?: string;
	alt?: string;
	highlighted?: boolean;
	framed?: boolean;
}

export interface ItemContextProps {
	item: Item;
	counter: number;
	increaseBy: (value: number) => void;
}
