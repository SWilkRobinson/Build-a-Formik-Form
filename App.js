import React from "react";
import { useFormik } from 'formik';

function App() {
 const formik = useFormik({
  initialValues: {
    email: '',
    password: '',
  },
  onSubmit: values =>{
    console.log('form:', values);
    alert ("Login Successful");
  },
  validate: values => {
    let errors = {};
    if(!values.email) errors.email = 'Field Required';
    if(!values.password) errors.password = 'Field Required';
    return errors;
  }
 });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input 
          id="emailField" 
          name="email" 
          type="text" 
          onChange={formik.handleChange} 
          value={formik.values.email} 
        />
        {formik.errors.email ? <div id="emailError" style={{color: 'red'}}>{formik.errors.email}</div>: null}
      
        <div>Password</div>
        <input 
          id="pswField" 
          name="password" 
          type="text" 
          onChange={formik.handleChange} 
          value={formik.values.password} 
        />
        {formik.errors.password ? <div id="pswError" style={{color: 'red'}}>{formik.errors.password}</div>: null}
        
        <button type="submitBtn">Submit</button>
      </form>
    </div>
  );
};

export default App;
