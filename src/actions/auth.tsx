import { Dispatch } from 'react';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { ActionTypes, ACTION_TYPES, User } from '../types/types';

export interface LoginValues {
	email: string;
	password: string;
}

export interface SignUpValues {
	email: string;
	username: string;
	password: string;
}
type Payload =
	| { roles: string[]; username: string }
	| { error: any; values: LoginValues | SignUpValues };

export interface Action {
	type: ActionTypes;
	payload?: Payload;
}

const loginRequestAction = () => ({
	type: ACTION_TYPES.AUTH_LOGIN_REQUEST
});

const loginSuccessAction = (user: User) => ({
	type: ACTION_TYPES.AUTH_LOGIN_SUCCESS,
	payload: user
});

const loginFailureAction = (error: any) => ({
	type: ACTION_TYPES.AUTH_LOGIN_FAILURE,
	payload: error
});

const signUpRequestAction = () => ({
	type: ACTION_TYPES.AUTH_SIGNUP_REQUEST
});

const signUpSuccessAction = (user: User) => ({
	type: ACTION_TYPES.AUTH_SIGNUP_SUCCESS,
	payload: user
});

const signUpFailureAction = (error: any) => ({
	type: ACTION_TYPES.AUTH_SIGNUP_FAILURE,
	payload: error
});

const renewTokenRequestAction = () => ({
	type: ACTION_TYPES.AUTH_RENEW_REQUEST
});

const renewTokenSuccessAction = (user: User) => ({
	type: ACTION_TYPES.AUTH_RENEW_SUCCESS,
	payload: user
});

const renewTokenFailureAction = () => ({
	type: ACTION_TYPES.AUTH_RENEW_FAILURE
});

const logoutAction = () => ({
	type: ACTION_TYPES.AUTH_LOGOUT
});

export const login = (email: string, password: string) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch(loginRequestAction());
		try {
			const resp = await fetchWithoutToken({
				endpoint: 'v1/authentication/login',
				body: { email, password },
				method: 'POST'
			});

			const body = await resp.json();

			if (!body.error) {
				localStorage.setItem('token', body.token);
				localStorage.setItem('token-init-date', String(new Date().getTime()));

				dispatch(
					loginSuccessAction({
						roles: body.user.roles,
						username: body.user.username
					})
				);
			} else {
				let error;
				switch (body.code) {
					case 'E31':
					case 'E2':
						error = 'Invalid credentials';
						break;

					default:
						error = body.error;
						break;
				}

				dispatch(
					loginFailureAction({
						error,
						loginValues: { email, password }
					})
				);
			}
		} catch {
			dispatch(
				loginFailureAction({
					error: 'There was an error',
					loginValues: { email, password }
				})
			);
		}
	};
};

export const signUp = (email: string, username: string, password: string) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch(signUpRequestAction());
		try {
			const resp = await fetchWithoutToken({
				endpoint: 'v1/authentication/signIn',
				body: { email, username, password },
				method: 'POST'
			});
			const body = await resp.json();

			if (!body.error) {
				localStorage.setItem('token', body.token);
				localStorage.setItem('token-init-date', String(new Date().getTime()));

				console.log({ body });

				dispatch(
					signUpSuccessAction({
						roles: body.user.roles,
						username: body.user.username
					})
				);
			} else {
				const error = body.code === 'E202' ? 'User already exists' : body.error;
				dispatch(
					signUpFailureAction({
						error,
						signUpValues: { email, username, password }
					})
				);
			}
		} catch {
			dispatch(
				signUpFailureAction({
					error: 'There was an error',
					signUpValues: {
						email: email,
						username: username,
						password: password
					}
				})
			);
		}
	};
};

export const renewToken = () => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch(renewTokenRequestAction());
		try {
			const resp = await fetchWithToken({
				endpoint: 'v1/authentication/renewToken'
			});
			const body = await resp.json();

			if (!body.error) {
				localStorage.setItem('token', body.token);
				localStorage.setItem('token-init-date', String(new Date().getTime()));
				dispatch(renewTokenSuccessAction(body.user as User));
			} else {
				dispatch(renewTokenFailureAction());
			}
		} catch {
			dispatch(renewTokenFailureAction());
		}
	};
};

export const logout = () => {
	return (dispatch: Dispatch<Action>) => {
		localStorage.clear();
		dispatch(logoutAction());
	};
};
