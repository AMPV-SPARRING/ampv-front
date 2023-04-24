import { Action, LoginValues, SignUpValues } from '../actions/auth';
import { ACTION_TYPES } from '../types/types';

export type State = {
	loading?: boolean;
	renewLoading?: boolean;
	isLoggedIn?: boolean;
	uid?: string;
	name?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	error?: any;
	loginValues?: LoginValues;
	signUpValues?: SignUpValues;
};

const initialState: State = {
	loading: false,
	renewLoading: true
};

const authReducer = (state: State = initialState, action: Action) => {
	switch (action.type) {
		case ACTION_TYPES.AUTH_LOGIN_REQUEST:
		case ACTION_TYPES.AUTH_SIGNUP_REQUEST:
			return {
				...state,
				loading: true
			};

		case ACTION_TYPES.AUTH_LOGIN_SUCCESS:
		case ACTION_TYPES.AUTH_LOGIN_FAILURE:
		case ACTION_TYPES.AUTH_SIGNUP_SUCCESS:
		case ACTION_TYPES.AUTH_SIGNUP_FAILURE:
			return {
				...state,
				...action.payload,
				loading: false
			};
		case ACTION_TYPES.AUTH_RENEW_REQUEST:
			return {
				...state,
				renewLoading: true
			};
		case ACTION_TYPES.AUTH_RENEW_SUCCESS:
			return {
				...state,
				...action.payload,
				renewLoading: false
			};
		case ACTION_TYPES.AUTH_RENEW_FAILURE:
			return {
				...state,
				renewLoading: false
			};
		case ACTION_TYPES.AUTH_LOGOUT:
			return {};

		default:
			return state;
	}
};

export default authReducer;
