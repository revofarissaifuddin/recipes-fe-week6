import React from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default function register() {
    return <div>
            <div className="container-fluid">
            <div className="col-lg-3 position-absolute top-50 start-50 translate-middle">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-8 p-5 w-50 text-center">
                        <h3 className="text-warning">Recipe...</h3>
                    </div>
                    <div className="mt-5">
                        <h2 className="text-warning text-center">Let’s Get Started !</h2>
                        <p className="text-body-secondary text-center fs-6">Create new account to access all features</p>
                    </div>
                    <form className="mt-5">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder="name"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="email"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">password</label>
                            <input type="password" className="form-control" placeholder="password"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input"/>
                            <label className="form-check-label">I agree to terms & conditions</label>
                        </div>
                        
                    </form>
                    <div className="mb-3">
                        <button className="btn btn-warning text-white shadow-none p-1 w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Register Account</button>
                    </div>
                    <div className="my-2 mt-0 mb-5">
                        <p className="text-left">Forgot Your Password?<Link to={'/auth/forgot-password'} className='Link text-warning'>Click Here</Link></p>
                    </div>
                    <div className="my-2 mt-5">
                        <p className="text-center">Already have account?<Link to={'/auth/login'} className='Link text-warning'>Log in Here</Link></p>
                    </div>
                </div>    
            </div>
        </div>
        </div>
}
