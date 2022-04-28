import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import login from '../../image/form/login.png'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/home')
    }



    const handleSubmitForm = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <h2 className='mt-3 text-center' style={{ color: 'purple' }}> Login Form</h2>
                    <form onSubmit={handleSubmitForm} className='form-register'>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Enter your email' />
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' />
                        <input style={{ backgroundColor: 'lightblue', fontSize: '18px' }} type="submit" value="Login" />
                    </form>
                    <p>You have no Account?   <Link to='/register'>Please Register</Link></p>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className='mt-5  '>
                        <img className='img-fluid rounded-2' src={login} alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;