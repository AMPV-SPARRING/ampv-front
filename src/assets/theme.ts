import { DefaultTheme } from 'styled-components';

export const color = {
	bg: '#282c34',
	white: '#FFFFFF',
	black: '#000000',
	error: '#cc0c39',

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

export const media = {
	atXSmall: '@media(max-width: 320px)',
	atSmall: '@media(min-width: 450px)',
	atMedium: '@media(min-width: 768px)',
	atLarge: '@media(min-width: 992px)',
	atDesktop: '@media(min-width: 1024px)',
	atXLarge: '@media(min-width: 1200px)',
	atH600: '@media(min-height: 600px)'
};

export const spacing = {
	halfSpace: '2px',
	space: '4px',
	space2: '8px',
	space3: '12px',
	space4: '16px',
	space5: '20px',
	space6: '24px',
	space7: '28px',
	space8: '32px',
	space9: '36px',
	space10: '40px',
	space11: '44px',
	space12: '48px',
	space14: '56px',
	space16: '64px',
	space18: '72px'
};

export const fontSize = {
	xs: '8px',
	s: '16px',
	m: '24px',
	l: '32px',
	xl: '48px',
	xxl: '64px'
};
/* 	box-shadow: 0 2px 4px ${({ theme }) => theme.color.bone100}, inset 2px 2px 10px ${({ theme }) => theme.color.black}; */
export const shadow = {
	file: `0 2px 4px ${color.bone100}, inset -2px 2px 10px ${color.black}`,
	file3D: `0 2px 4px ${color.bone100}, inset 2px 3px 30px ${color.blackAlpha},  20px 45px 30px ${color.blackAlpha}`,
	button: `0 2px 10px 2px ${color.blackAlpha}`
};
const theme: DefaultTheme = {
	color,
	media,
	spacing,
	fontSize,
	shadow
};

export default theme;
