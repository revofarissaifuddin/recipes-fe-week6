import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar } from "react-bootstrap";
import avatar from '../../Images/user.png'

function Avatar() {
return (
    <img
    className="avatar img-fluid rounded-circle align-items-center img-navbarMenu"
    src={avatar}
    alt="avatar"
    width={100}
    height={100}
    />
);
}
export default function NavbarMenu() {
    const name = localStorage.getItem("name")
    const navigate = useNavigate()
    const logout = () => {
    localStorage.clear()
    window.location.reload(false)
    navigate('/home')
    }
    return (
        <div>
            <Navbar className="navbar navbar-expand-lg bg-body-tertiary">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container-fluid row pt-4">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="collapse navbar-collapse col-md-6 col-12 row ps-5" id="navbarNav">
                        <div className="col-3 nav-item">
                            <h5><Link to={'/auth/register'} className='Link'>Register</Link></h5>
                        </div>
                        <div className="col-3 nav-item">
                            <h5><Link to={'/auth/login'} className='Link'>Login</Link></h5>
                        </div>
                        <div className="col-3 nav-item">
                            <h5><Link to={'/menu/searchMenu'} className='Link'>Search Menu</Link></h5>
                        </div>
                    </div>
                    <div className="col-md-6  col-12 row ps-5 navbar-brand">
                        <div className="col-8"></div>
                        <div className="col-4 ">
                            <div className="row">
                                <div className="col-5"></div>
                                    <div className="col-3 border-start border-3 border-warning ">
                                        <Avatar/>
                                    </div>
                                <div className="col-4">
                                    <h6><Link to={'/profile/detailProfile'} className='Link'>{name?name:"Users"}</Link></h6>
                                    <h6>{name && <button  variant="text" className='border-0 bg-white text-start' varian onClick={()=>logout()}><strong>logout</strong></button>}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
        </div>
    )
}
