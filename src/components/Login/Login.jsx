import React from 'react';
import '../Login/Login.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {login} from '../../services/Api';

const initialValues = {
    userName: '',
    password: ''
}
const onSubmit = values => {
    console.log(values);
    login(values)
    .then((result)=>{
        console.log(result);
        if(result.status == 200){
            console.log("Login successfuly");
            window.location.href='/submitCase';
        }
    });
    // window.location.href='/submitCase';
}

const validate = values =>{
    let errors = {};
    if(!values.userName){
        errors.userName = "Required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userName)){
        errors.userName = "Invalid Email format";
    }
    if(!values.password){
        errors.password = "Required"
    }
    return errors;
}

const validationSchema = Yup.object({
    userName: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')
})

function Login() {

    let tab = true;

    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
    })

    return (
        <div>
            <div className="login-wrap">
                <form onSubmit={formik.handleSubmit}>
                    <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Sign In</label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label>
                        <div className="login-form">
                            <div className="sign-in-htm">
                                <div className="group">
                                    <label for="user" className="label">Username</label>
                                    {/* <input id="user" type="text" className="input"/> */}
                                    <input 
                                        className={"input " + (formik.touched.userName && formik.errors.userName ? 'errorBorder':'')} 
                                        type="text"
                                        autofill="false"
                                        placeholder="User Name"  
                                        id="userName"
                                        name="userName"
                                        {...formik.getFieldProps('userName')}/>
                                        
                                        {formik.touched.userName && formik.errors.userName ? <div id="userNameErrMsg" className="errors">{formik.errors.userName}</div>: null}
                                </div>
                                <div className="group">
                                    <label for="pass" className="label">Password</label>
                                    {/* <input id="pass" type="password" className="input" data-type="password"/> */}
                                    <input
                                        className={"input " + (formik.touched.password && formik.errors.password ? 'errorBorder':'')}
                                        type="password" 
                                        placeholder="Password" 
                                        name="password"
                                        id="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}/>
                                        {formik.touched.password && formik.errors.password ? <div id="pwdErrMsg" className="errors">{formik.errors.password}</div>: null}

                                </div>
                                <div className="group">
                                    <button id="signin" type="submit" className="button">Login</button>
                                    {/* <input id="signin" type="submit" className="button" value="Sign In"/> */}
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <a href="#">Forgot Password?</a>
                                </div>
                            </div>
                            <div className="sign-up-htm">
                                <div className="group">
                                    <label for="user" className="label">Username</label>
                                    <input id="user" type="text" className="input"/>
                                </div>
                                <div className="group">
                                    <label for="pass" className="label">Password</label>
                                    <input id="pass" type="password" className="input" data-type="password"/>
                                </div>
                                <div className="group">
                                    <label for="pass" className="label">Repeat Password</label>
                                    <input id="pass" type="password" className="input" data-type="password"/>
                                </div>
                                <div className="group">
                                    <label for="pass" className="label">Email Address</label>
                                    <input id="pass" type="text" className="input"/>
                                </div>
                                <div className="group">
                                    <input type="submit" className="button" value="Sign Up"/>
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <label for="tab-1">Already Member?</label>
                                </div>
                            </div>
                        </div>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Login