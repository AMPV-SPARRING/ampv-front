import { DefaultTheme } from 'styled-components';
import { media, spacing, fontSize, width, baseColor } from './commonTheme';
export const color = {
	...baseColor,
	bg: '#282c34',
	bg2: '#1A1A1A',
	white: '#FFFFFF',
	black: '#1A1A1A',
	error: '#cc0c39',
	highlight: '#1C3D56',

	font: '#cecece',
	highlightFont: '#FFFFFF',

	blackAlpha: 'rgba(0, 0, 0, 0.5)',

	red: '#cc0c39',
	red50: '#c20b35',
	red100: '#af0b31',
	red200: '#9c0b2d',
	red300: '#7d0924',
	red400: '#65091f',
	red500: '#460715',

	blue: '#1693a7',
	blue50: '#0f7c8f',
	blue100: '#0d6d7f',
	blue200: '#0b5e6f',
	blue300: '#094e5f',
	blue400: '#07404f',
	blue500: '#053340',

	yellow: '#c8cf02',
	yellow50: '#b3ba02',
	yellow100: '#9fa602',
	yellow200: '#8b9202',
	yellow300: '#777d02',
	yellow400: '#636802',
	yellow500: '#4f5502',

	green: '#0f9d58',
	green50: '#0d8c4f',
	green100: '#0b7b46',
	green200: '#0a6a3d',
	green300: '#085934',
	green400: '#06482b',
	green500: '#043722',

	orange: '#e6781e',
	orange50: '#d66f1b',
	orange100: '#c66618',
	orange200: '#b55d15',
	orange300: '#a55412',
	orange400: '#944b0f',
	orange500: '#84420c',

	bone: '#f8fcc1',
	bone50: '#f7f9b0',
	bone100: '#f6f8a0',
	bone200: '#f5f790',
	bone300: '#f4f680',
	bone400: '#f3f570',
	bone500: '#f2f460',

	purple: '#9c27b0',
	purple50: '#8e249f',
	purple100: '#80228f',
	purple200: '#721f7e',
	purple300: '#641d6e',
	purple400: '#561a5d',
	purple500: '#48184d'
};

/* 	box-shadow: 0 2px 4px ${({ theme }) => theme.color.bone100}, inset 2px 2px 10px ${({ theme }) => theme.color.black}; */
export const shadow = {
	file: `0 2px 4px ${color.bone100}, inset -2px 2px 10px ${color.black}`,
	file3D: `0 2px 4px ${color.black}, inset 2px 3px 30px ${color.blackAlpha},  0px 45px 60px ${color.blackAlpha}`,
	card: `0 2px 4px ${color.blackAlpha}`,
	cardHover: `0 3px 8px ${color.blackAlpha}, 0 0 10px ${color.bone}`,
	button: `0 2px 10px 2px ${color.blackAlpha}`
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
