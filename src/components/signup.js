import React from 'react'
import {useFormik} from 'formik';

import validationSchema  from './validations';

function Signup() {




    const {handleSubmit,handleChange,handleBlur, touched,values,errors} = useFormik({
        initialValues: {
           email: "erkutsakar@hotmail.com",
           password:'',
           passwordConfirm:'',
       },
        onSubmit: (values) => {
           console.log(values);
         },
    validationSchema,
      });

      


      return (
        <div className="App">
              <h1>Sign Up</h1>
        
            
              <form onSubmit={handleSubmit}>
               
                <label>Email</label>
                <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                 {errors.email && touched.email && (<div className='error'>{errors.email}</div>)}
               <br />
               <label>Password</label>
                <input name="password" 
                value={values.password} 
                onChange={handleChange} 
                onBlur={handleBlur}/>
                {errors.password && touched.password && (<div className='error'>{errors.password}</div>)}
               <br />
        
               <label>Confirm Password</label>
                <input name="passwordConfirm" 
                value={values.passwordConfirm} 
                onChange={handleChange} />
                {errors.passwordConfirm && touched.passwordConfirm && (<div className='error'>{errors.passwordConfirm}</div>)}
                <br />
                <button type="submit">Submit</button>
        
                <code>{JSON.stringify(values)}</code>
              </form>
          
            </div>
  )
}

export default Signup