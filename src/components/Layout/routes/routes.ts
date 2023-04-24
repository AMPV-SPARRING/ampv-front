import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	name: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	exact: boolean;
}

const Home = lazy(() => import(/* webpackChunkName:"Home" */ '../pages/Home'));
const Contact = lazy(
	() => import(/* webpackChunkName:"Contact" */ '../pages/Contact')
);
const About = lazy(
	() => import(/* webpackChunkName:"About" */ '../pages/About')
);
export const routes: Route[] = [
	{
		to: '/app/home',
		path: 'home',
		Component: Home,
		name: 'Home',
		exact: true
	},
	{
		to: '/app/about',
		path: 'about',
		Component: About,
		name: 'About',
		exact: true
	},
	{
		to: '/app/contact',
		path: 'contact',
		Component: Contact,
		name: 'Contact',
		exact: true
	}
];
