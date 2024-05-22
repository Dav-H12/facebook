import React from "react";
import { Formik } from "formik";
import * as YUP from "yup";

const Register = () => {
  const validate = YUP.string().shape({
    firstname: YUP.string()
      .min(4, "password is min lenght 4 sybool")
      .required("input filed is required"),
    lastname: YUP.string()
      .min(4, "password is min lenght 4 sybool")
      .required("input filed is required"),
    password: YUP.string()
      .min(4, "password is min lenght 4 sybool")
      .required("input filed is required"),
    confirmPasswordc: YUP.string()
      .min(4, "password is min lenght 4 sybool")
      .oneOf([YUP.ref("password")], "NO NO NO")
      .required("input filed is required"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => console.log(values)}
      >
        {({
          values,
          handleBlur,
          handleChange,
          handleSubmit,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              placeholder="firstname"
              name="firstname"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstname && touched.firstname && (
              <p className="err-text">{errors.firstname}</p>
            )}
            <input
              placeholder="lastname"
              name="lasttname"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastname && touched.lastname && (
              <p className="err-text">{errors.lastname}</p>
            )}
            <input
              placeholder="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <p className="err-text">{errors.password}</p>
            )}
            <input
              placeholder="confirmpassword"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="err-text">{errors.confirmPassword}</p>
            )}

            <button type="submit">register</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
