import React, { useState } from "react";
import "./Login.css";
import { Formik } from "formik";
import * as YUP from "yup";

function Login() {
  const validate = YUP.object().shape({
    email: YUP
      .string()
      .email("invalid email")
      .required("input filed is required"),
    password: YUP
      .string()
      .min(4, "password is min lenght 4 symbol")
      .max(9, "password is min lenght 9 symbol")
      .required("input filed is required"),
  })
  return (
    <div className="Loginbox">
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={validate}
      >
        
        {({
          values,
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
          touched,
          isValid,
          dirty
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              value={values.email}
              className='o'
              placeholder='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {
            errors.email && touched.email && <p className="err-text">{errors.email}</p>
            }
            <input
              value={values.password}
              className="o"
              placeholder="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {

             errors.password && touched.password && <p className="err-text">{errors.password}</p>

            }
            <button className="obutton" type="submit" disabled={!isValid && dirty}>
              Login
            </button>
          </form>
        )}
    
      </Formik>
    </div>
  )
}

export default Login;
