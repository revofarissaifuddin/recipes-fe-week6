import React from 'react'
import { Link } from 'react-router-dom'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default function forgotPassword() {
    return (
        <div>
            <div className="container col-lg-3 position-absolute top-50 start-50 translate-middle">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-8 p-5 w-50 text-center">
                        <h3 className="text-warning">Recipe...</h3>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-warning text-center">Forgot password</h3>
                        <p className="text-body-secondary text-center fs-6">Send OTP to your email</p>
                    </div>
                </div>
                <form className="mt-5">
                    <div className="mb-3">
                        <label className="form-label" >Email</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email address"/>
                    </div>
                </form>
                <div className="">
                        <button className="btn btn-warning text-white shadow-none p-1 w-100">Send OTP</button>
                    </div>
                <div className="my-2">
                    <p className="text-left">Login instead?<Link to={'/home'} className='Link text-warning'>Click here</Link></p>
                </div>
            </div>
    </div>
    )
}
