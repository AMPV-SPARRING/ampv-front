import React from 'react';
import styled from 'styled-components';
import { Card } from '../../shared/Card/Card';
import {
	ItemButtons,
	ItemDescription,
	ItemImage,
	ItemTitle
} from '../../shared/Card/Components';

const StyledHeader = styled.div`
	color: ${({ theme }) => theme.color.white};
`;

const StyledFlexContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const MOCK_ITEMS = [
	{
		id: '1',
		title: 'Card 1',
		description: 'Lorem ipsum dolor sit amet',
		img: '../src/assets/images/-sVJXBJo.jpeg',
		alt: 'Fruit boxes stage image'
	},
	{
		id: '2',
		title: 'Card 2'
	}
];

export const Home = () => {
	return (
		<>
			<StyledHeader>
				<h1>Home</h1>
				<hr />
			</StyledHeader>
			<StyledFlexContainer>
				{MOCK_ITEMS.map(item => (
					<Card key={item.id} item={item}>
						<ItemImage />
						<ItemTitle />
						<ItemDescription />
						<ItemButtons />
					</Card>
				))}
				{MOCK_ITEMS.map(item => (
					<Card key={item.id} item={item}>
						<Card.Image />
						<Card.Title />
						<Card.Description description={'Compound'} />
						<Card.Buttons />
					</Card>
				))}
			</StyledFlexContainer>
		</>
	);
};

export default Home;
