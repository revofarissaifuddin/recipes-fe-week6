import React from 'react'
import { Link } from 'react-router-dom'
import '../../Css/footer.css'
export default function FooterMenu() {
    return (
        <div>
            <div className="footer container-fluid text-center mt-5">
            <div className="row d-flex text-center justify-content-center">
                <div className="col-lg-6">
                    <h1 className="fs-1 mt-5">
                        Eat, Cook, Repeat
                    </h1>
                    <h6 className="fs-6 mt-3 mb-5 fw-light">
                        Share Your Best Recipes By Uploading Here !
                    </h6>
                </div>
            </div>
            </div>
            <div className="controler-fluid">
                <div className="footer-end p-2">
                    <div className="container text-center">
                        <div className="row p">
                            <div className="col">
                            </div>
                            <div className="col">
                                <Link to={'/'} className='Link ms-2'>Product</Link>
                                <Link to={'/'} className='Link ms-2'>Company</Link>
                                <Link to={'/'} className='Link ms-2'>Learn More</Link>
                                <Link to={'/'} className='Link ms-2'>Get in Touch</Link>
                            </div>
                            <div className="col text-end">
                                <Link to={'/'} className='Link'>© 2023 Pijar</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
