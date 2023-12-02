import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toastNotify } from "../../Helper";

function LoginForm() {
  return (
    <div
      className='mt-2 pt-3 pl-2 text-center'
      style={{ borderTop: "1px solid #999" }}>
      <div className='p-4'>
        <div className='border p-4'>
          <h4 className='text-success pb-2'>Login Form</h4>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Required";
              } else if (!/^.{8,}$/i.test(values.password)) {
                errors.password = "Invalid Password";
              }

              return errors;
            }}
            onSubmit={() => {
              toastNotify("Form Submitted successfully");
            }}>
            {({ isSubmitting }) => (
              <Form>
                <div className='mb-3'>
                  <Field
                    type='email'
                    name='email'
                    className='form-control'
                    placeholder='Enter Email Address...'
                  />
                  <ErrorMessage
                    name='email'
                    component='span'
                    className='text-danger'
                  />
                </div>
                <div className='mb-3'>
                  <Field
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='Enter Password...'
                  />
                  <ErrorMessage
                    name='password'
                    component='span'
                    className='text-danger'
                  />
                </div>
                <button
                  type='submit'
                  className='btn btn-primary'
                  disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
