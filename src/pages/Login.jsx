import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  WrapperStyled,
  Buttons,
  FormContent,
  SubmitButton,
  FormTitle,
  FormLabel,
  FormInput,
  FormError,
} from './Form.styled';

import { signIn } from 'redux/Auth/AuthOperations';
import { useDispatch } from 'react-redux';



const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(7)
    .max(16)
    .required('must be at least 7 characters'),
});

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    dispatch(signIn(value));
    resetForm();
  };

  return (
    <WrapperStyled>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form autoComplete="off">
          <FormTitle>Login</FormTitle>
          <FormContent>
            <FormLabel>
              <FormInput name="email" type="email" placeholder="Email" />
              <FormError name="email" component="p" />
            </FormLabel>
            <FormLabel>
              <FormInput name="password" type="password" placeholder="Password" />
              <FormError name="password" component="p" />
            </FormLabel>
          </FormContent>
          <Buttons>
            <SubmitButton type="submit">Submit</SubmitButton>
          </Buttons>
        </Form>
      </Formik>
    </WrapperStyled>
  );
};
export default Login;
