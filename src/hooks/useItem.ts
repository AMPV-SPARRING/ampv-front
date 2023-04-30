import React from 'react';

export const useItem = () => {
	const [counter, setCounter] = React.useState(0);

	const increaseBy = (value: number) => {
		setCounter(prev => Math.max(prev + value, 0));
	};

	return { counter, increaseBy };
};
