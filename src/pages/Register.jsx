import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import {
  WrapperStyled,
  Buttons,
  FormContent,
  SubmitButton,
  FormTitle,
  FormLabel,
  FormError,
  FormInput,
} from './Form.styled';

import { signUp } from 'redux/Auth/AuthOperations';
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(8)
    .max(50)
    .required('must consist of two words separated by a space'),
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(7)
    .max(16)
    .required('must be at least 7 characters'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = (value, { resetForm }) => {
    resetForm();
    dispatch(signUp(value));
  };

  return (
    <WrapperStyled>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ isValid }) => (
          <Form autoComplete="off">
            <FormTitle>Sign Up</FormTitle>
            <FormContent>
              <FormLabel>
                <FormInput
                  isvalid={isValid.toString()}
                  type="text"
                  name="name"
                  placeholder="Full name"
                />
                <FormError name="name" component="p" />
              </FormLabel>
              <FormLabel>
                <FormInput
                  isvalid={isValid.toString()}

                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <FormError name="email" component="p" />
              </FormLabel>
              <FormLabel>
                <FormInput
                  isvalid={isValid.toString()}

                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <FormError name="password" component="p" />
              </FormLabel>
            </FormContent>
            <Buttons>
              <SubmitButton type="submit" disabled={!isValid}>
                Sign Up
              </SubmitButton>
            </Buttons>
          </Form>
        )}
      </Formik>
    </WrapperStyled>
  );
};

export default Register;
