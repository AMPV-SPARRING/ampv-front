import { Methods } from '../types/types';

const baseUrl = import.meta.env.VITE_API_URL;

interface Props {
	endpoint: string;
	body?: object;
	method?: Methods;
}

const fetchWithoutToken = ({ endpoint, body, method = 'GET' }: Props) => {
	const url = `${baseUrl}/${endpoint}`;

	if (method === 'GET') {
		return fetch(url);
	} else {
		return fetch(url, {
			method,
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(body)
		});
	}
};

const fetchWithToken = ({ endpoint, body, method = 'GET' }: Props) => {
	const url = `${baseUrl}/${endpoint}`;
	const token = localStorage.getItem('token') || '';

	if (method === 'GET') {
		return fetch(url, {
			method,
			headers: {
				authorization: `Bearer ${token}`
			}
		});
	} else {
		return fetch(url, {
			method,
			headers: {
				authorization: `Bearer ${token}`,
				'Content-type': 'application/json'
			},
			body: JSON.stringify(body)
		});
	}
};

export { fetchWithoutToken, fetchWithToken };
