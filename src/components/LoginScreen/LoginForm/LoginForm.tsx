import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { RootState } from '../../../store/store';
import { login } from '../../../actions/auth';
import Button from '../../shared/Button/Button';
import TextInputField from '../../shared/InputField/TextInputField';

const LoginForm: React.FC = () => {
	const dispatch = useAppDispatch();
	const { loading, error, loginValues } = useAppSelector(
		(state: RootState) => state.auth
	);

	const initialValues = {
		email: loginValues?.email || '',
		password: loginValues?.password || ''
	};

	const validationSchema = yup.object().shape({
		email: yup
			.string()
			.email('Enter a valid email')
			.required('Email is required'),
		password: yup.string().required('Password is required')
	});

	const handleLogin = (values: { email: string; password: string }) => {
		dispatch(login(values.email, values.password));
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
			{error && typeof error === 'string' && (
				<span className="submit-errors">{error}</span>
			)}
			<div className="switch-form">
				Wanna join? <Link to="/auth/signup">Sign up</Link>
			</div>
		</>
	);
};

export default LoginForm;
