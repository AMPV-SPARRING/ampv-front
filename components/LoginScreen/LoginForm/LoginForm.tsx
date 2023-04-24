import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
// import { useDispatch /* useSelector */ } from 'react-redux';
import { Link } from 'react-router-dom';
// import { RootState } from 'store';
import Button from '../../shared/Button/Button';
// import { login } from '../../../actions/auth';
import TextInputField from '../../shared/InputField/TextInputField';

const LoginForm: React.FC = () => {
	// const dispatch = useDispatch();
	// const { loading, error, loginValues } = useSelector(
	// 	(state: any) => state.auth
	// );
	const loading = false;
	const error = {
		email: { msg: 'Email is required' },
		password: { msg: 'Password is required' }
	};
	// const loginValues = null;

	// const initialValues = {
	// 	email: loginValues?.email || '',
	// 	password: loginValues?.password || ''
	// };
	const initialValues = {
		email: '',
		password: ''
	};
	const validationSchema = yup.object().shape({
		email: yup
			.string()
			.email('Enter a valid email')
			.required('Email is required'),
		password: yup.string().required('Password is required')
	});

	const handleLogin = (values: { email: string; password: string }) => {
		// dispatch(login(values.email, values.password));
	};

	return (
		<>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={values => handleLogin(values)}
			>
				<Form>
					<TextInputField
						name="email"
						placeholder="Email"
						error={error?.email?.msg}
					/>
					<TextInputField
						name="password"
						type="password"
						placeholder="Password"
						error={error?.password?.msg}
					/>
					<Button type="submit" loading={loading}>
						Login
					</Button>
				</Form>
			</Formik>
			{/* {error && typeof error === 'string' && (
				<span className="submit-errors">{error}</span>
			)} */}
			<div className="switch-form">
				Don't have an account? <Link to="/auth/signup">Sign up</Link>
			</div>
		</>
	);
};

export default LoginForm;
