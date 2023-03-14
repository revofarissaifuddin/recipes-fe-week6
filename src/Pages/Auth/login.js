import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

let LOGIN_URL =process.env.REACT_APP_API_BASEURL;
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log({ email, password });
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    };

    const handleApi = () => {
        // console.log({email,password})
        axios.post(`${LOGIN_URL}/auth/login`, {
            email: email,
            password:password
        }).then(res => {
        console.log(res.data)
        alert('success')
        })
        .catch(err => {
            alert('service error')
            console.log(err)
        })
    }
    return (
        <div className="container-fluid" id="login-page">
        <div className="col ">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-8 p-5 w-50 text-center">
                    <h3 className="text-warning">Recipe...</h3>
                </div>
                <div className="mt-5">
                    <h3 className="text-warning text-center">Welcome</h3>
                    <p className="text-body-secondary text-center fs-6">Login in into your exiting account</p>
                </div>
            </div>
                <div className='row justify-content-center align-items-center'>
                    <div className='w-50'>
                        <form className="mt-5">
                            <div className="mb-3">
                                <label className="form-label" >Email</label>
                                <input type="text" value={email} onChange={handleEmail} className="form-control" aria-describedby="emailHelp" placeholder="Email address"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">password</label>
                                <input type="password" value={password} onChange={handlePassword} className="form-control" placeholder="password"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input"/>
                                <label className="form-check-label">I agree to terms & conditions</label>
                            </div>
                            <div className="mb-3">
                                <button onClick={handleApi} className="btn btn-warning text-white shadow-none p-1 w-100">Login</button>
                            </div>
                        </form>
                    </div>
            </div>
            <div className="my-2 mt-5">
                <p className="text-center">Don't have an account?<Link to={'/auth/register'} className='Link text-warning'>Sign up</Link></p>
            </div>
        </div>
    </div>
    )
}
