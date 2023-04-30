import { ReactElement } from 'react';

export interface ItemCardProps {
	item: Item;
	children?: ReactElement | ReactElement[];
}

export interface Item {
	id: string;
	title: string;
	description?: string;
	img?: string;
	alt?: string;
}

export interface ItemContextProps {
	item: Item;
	counter: number;
	increaseBy: (value: number) => void;
}
