import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import NavbarDetail from '../../Component/NavbarDetail'
import { useSelector } from 'react-redux'
export default function DetailProfile() {
    const user = useSelector((state) => state.user.data)
    useEffect(() => {
        console.log(user)
    },[user])
    return (
        <div>
            <NavbarDetail/>
            <div className="container col-md-3 position-absolute top-50 start-50 translate-middle">
            <div className="row justify-content-center align-items-center">
                <div className="text-center">
                        <img src="../../images/BiodataR.jpg" className="img-sm img-fluid rounded-circle" alt=""/>
                </div>
                <div className="mt-2">
                    <p className="text-body-secondary text-center fs-5">Change Profile Picture</p>
                </div>
            </div>
            <form className="mt-5">
                <div className="mb-3">
                    <label className="form-label">Full name</label>
                    <input type="text" className="form-control" placeholder={user.fullname}/>
                </div>
                <div className="mb-3">
                    <label className="form-label" >Email</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder={ user.email}/>
                </div>
            </form>
            <div className="mb-0 mt-5">
                <button className="btn btn-warning text-white shadow-none p-1 w-100">Update Profile</button>
            </div>
            <div className="my-2 mt-3">
                <p className="text-left">Change Password?<Link to={'/auth/forgotPassword'} className='Link text-warning'> Click Here</Link></p>
            </div>
        </div>
        </div>
    )
}
