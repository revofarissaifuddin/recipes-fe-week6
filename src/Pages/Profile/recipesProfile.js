import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FooterMenu from '../../Component/Footer';
import NavbarDetail from '../../Component/NavbarDetail';
import axios from "../../Api/axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

let token ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwOGE1NmQyLWZlNWMtNDFlZi1hYmIwLWY5MmMxYzQ5OWQyMiIsImVtYWlsIjoicmV2b0BnbWFpbC5jb20iLCJmdWxsbmFtZSI6InJldm8iLCJwaG90byI6bnVsbCwidmVyaWYiOjEsIm90cCI6IjY0NzIyMSIsImNyZWF0ZV9hdCI6IjIwMjMtMDItMjZUMDg6NTc6NTguODQ2WiIsImlhdCI6MTY3ODcwMTcyNywiZXhwIjoxNjc4Nzg4MTI3fQ.XUNDgYFkT5six3qz9ogfTcEqF9ExLeEfh9jh_zZJWRA";
let PROFILE_URL = "/recipes/my-recipe";
export default function RecipesProfile() {
    const [selected, setSelected] = useState();
    const [data, setData] = useState();
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const confirmDelete = (id) => {
        setSelected(id);
        handleShow();
    };

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios
            .get(PROFILE_URL, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": token,
                }
            })
            .then((res) => {
                console.log(res);
                setData(res.data.data);
            })
            .then((err) => {
                console.log(err);
            });
    }
    
    const deleteData = (id) => {
        axios
            .delete(PROFILE_URL + `/${id}`, {
                headers: {
                    "Authorization": token,
                }
            })
            .then((res) => {
                console.log("delete data index ke ", id);
                console.log(res);
                handleClose();
                getData();
            })
            .then((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <NavbarDetail />
            <div className="container-fluid">
                <div className="container ">
                    <div className="row pt-5">
                        <div className="col ">
                            <div className="row">
                                <div className="col-3 border-start border-3 border-warning ">
                                    <img src="" alt="" className="rounded-circle" style={{ width: "50px" }} />
                                </div>
                                <div className="col">
                                    <h6><Link to={'/profile/detailProfile'} className='Link'>users</Link></h6>
                                    <h6 className="fw-bolder"><Link to={''} className='Link'>Logout</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-6"></div>
                        <div className="col text-end">
                            <h5>21 February 2023</h5>
                        </div>
                    </div>
                

                    <div className="container mt-5">
                        <div className="row row-cols-md-6">
                            <div className="col border-bottom border-5 border-warning text-start">
                                <h3>
                                    <Link to={'/profile/recipesProfile'} className='Link fw-bold'>Recipes</Link>
                                </h3>
                            </div>
                            <div className="col border-bottom border-5 border-warning text-center text-secondary">
                                <h3>
                                    <Link to={'/profile/bookmaredProfile'} className='Link'>Bookmarked</Link>
                                </h3>
                            </div>
                            <div className="col border-bottom border-5 border-warning text-end text-secondary">
                                <h3>
                                    <Link to={''} className='Link'>Liked</Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="list-group">
                            <div className="container-fluid text-center mt-4">
                                {data?.map((item, index) => (
                                    <div key={index + 1} className="row row-cols-md-4 mt-4">
                                        <div className="col">
                                            <div className="row">
                                                <img src={item.photo} alt="" className="border-5 rounded-4" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <div className="" id="title">
                                                    <h5 className="text-start mt-2 fw-bold">
                                                        <Link to={`/menu/detailMenu/${item.id}`} className='Link'>{item.title}</Link>
                                                    </h5>
                                                </div>
                                                <div className="mt-2">
                                                    <p className="text-start">{item.descriptions}</p>
                                                </div>
                                                <div className="mt-2">
                                                    <button className="btn btn-warning btn-sm text-white shadow-none  w-100 disabled">10 Likes - 12 Command - 3 Bookmark</button>
                                                </div>
                                                <div className="row mt-4">
                                                    <div className="col">
                                                        <Link to={`/menu/editMenu/${item.id}`}>
                                                            <button className="btn btn-info btn-sm text-white shadow-none  me-4">
                                                                Edit Menu
                                                            </button>
                                                        </Link>
                                                    </div>
                                                    <div className="col">
                                                        <button className="btn btn-danger btn-sm text-white shadow-none" onClick={() => confirmDelete(item.id)}>Delete Menu</button>
                                                    </div>
                                                    <Modal show={show} onHide={() => handleClose()}>
                                                        <Modal.Header closeButton className="bg-warning">
                                                            <Modal.Title>Kamu yakin hapus data ini</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Footer className="bg-warning">
                                                            <Button variant="secondary" onClick={() => handleClose()}>
                                                                Close
                                                            </Button>
                                                            <Button variant="danger" onClick={() => deleteData(selected)}>
                                                                Delete data
                                                            </Button>
                                                        </Modal.Footer>
                                                    </Modal>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="controler mt-5">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <Link className='Link page-link bg-warning text-white'>Prev</Link>
                            </li>
                            <li className="page-item ">
                                <Link className='Link page-link border-0 bg-light'>Show 6-10 from 10</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                    
            </div>
            <FooterMenu />
        </div>
        
    )

}
