import React from 'react';
import './Register.css'
import registration from '../../image/form/registraton.png'

const Register = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <h2 className='mt-3 text-center' style={{ color: 'purple' }}>Please Register</h2>
                    <form className='form-register'>
                        <input type="text" placeholder='Name' />
                        <input type="email" name="email" id="" placeholder='Enter your email' />
                        <input type="password" name="password" id="" placeholder='Password' />
                        <input type="password" name="ConfirmPassword" id="" placeholder='Confirm Password' />
                        <input style={{ backgroundColor: 'lightblue', fontSize: '18px' }} type="submit" value="Register" />
                    </form>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className='mt-5  '>
                        <img className='img-fluid rounded-2' src={registration} alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Register;