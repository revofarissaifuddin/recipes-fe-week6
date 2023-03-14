import React from 'react'
import { Link } from 'react-router-dom'
import NavbarDetail from '../../Component/NavbarDetail'

export default function ChangePassword() {
    return (
        <div>
            <NavbarDetail/>
            <div className="container col-lg-3 position-absolute top-50 start-50 translate-middle">
                <div className="row justify-content-center align-items-center">
                    <div className="mb-5 text-center w-100">
                        <h3 className="text-warning">Change Your Password Here</h3>
                    </div>
                <form className="mt-5">
                    <div className="mb-3 mt-5">
                        <label className="form-label">Old Password</label>
                        <input type="password" className="form-control" placeholder="*************"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">New Password</label>
                        <input type="password" className="form-control" placeholder="*************"/>
                    </div>
                </form>
                <div className="mb-0 mt-5">
                    <button className="btn btn-warning text-white shadow-none p-1 w-100">Change Password</button>
                </div>
                <div className="my-2 mt-3">
                    <p className="text-left">Back to edit profile?<Link to={'/profile/detailProfile'} className='text-warning'>Click Here</Link></p>
                </div>
            </div>
        </div>
    
    </div>
    )
}
