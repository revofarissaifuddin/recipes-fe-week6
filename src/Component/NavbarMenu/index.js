import React from 'react';
import { Link } from "react-router-dom";
export default function NavbarMenu() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
                                    <img src="../../images/BiodataR.jpg" alt="" className="img-fluid rounded-circle align-items-center img-navbarMenu"/>
                                </div>
                                <div className="col-4">
                                    <h6><Link to={'/profile/detailProfile'} className='Link'>users</Link></h6>
                                    <h6 className="fw-bolder"><Link to={'/'} className='Link'>Logout</Link></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    )
}
