import { DefaultTheme } from 'styled-components';
import { media, spacing, fontSize, width, baseColor } from './commonTheme';

export const color = {
	...baseColor,
	bg: '#ffffff',
	bg2: '#cecece',
	white: '#FFFFFF',
	black: '#000000',
	error: '#cc0c39',
	highlight: '#9AB0DD',


	font: '#000000',
	highlightFont: '#000000',
};

/* 	box-shadow: 0 2px 4px ${({ theme }) => theme.color.bone100}, inset 2px 2px 10px ${({ theme }) => theme.color.black}; */
export const shadow = {
	file: `0 2px 4px ${color.bone100}, inset -2px 2px 10px ${color.black}`,
	file3D: `0 2px 4px ${color.black}, inset 2px 3px 30px ${color.blackAlpha},  20px 45px 30px ${color.blackAlpha}, 20px 45px 30px ${color.blackAlpha}`,
	card: `0 2px 4px ${color.blackAlpha}`,
	cardHover: `0 3px 8px ${color.blackAlpha}`,
	button: `0 2px 10px 2px ${color.blackAlpha}`,
	highlight: `0 2px 10px 2px ${color.highlight}`
};
const theme: DefaultTheme = {
	color,
	media,
	spacing,
	fontSize,
	shadow,
	width
};

export default theme;
