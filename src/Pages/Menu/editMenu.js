import React, { useState, useEffect } from "react";
import axios from "axios";
import FooterMenu from "../../Component/Footer";
import NavbarEdit from "../../Component/NavbarEdit";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwOGE1NmQyLWZlNWMtNDFlZi1hYmIwLWY5MmMxYzQ5OWQyMiIsImVtYWlsIjoicmV2b0BnbWFpbC5jb20iLCJmdWxsbmFtZSI6InJldm8iLCJwaG90byI6bnVsbCwidmVyaWYiOjEsIm90cCI6IjY0NzIyMSIsImNyZWF0ZV9hdCI6IjIwMjMtMDItMjZUMDg6NTc6NTguODQ2WiIsImlhdCI6MTY3ODg3MTMwMCwiZXhwIjoxNjc4OTU3NzAwfQ.gdKiSiVglBOjh0imG63c5mW68BwJ-a-eelfqprjmmnE";
let URL = process.env.REACT_APP_BASE_URL;

export default function EditMenu() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [photo, setPhoto] = useState();

    const [updateData, setUpdateData] = useState({
        title: "",
        descriptions: "",
        category_id: "",
    });
    const toastSuccess = () =>
        toast.success("Update data successfully.", {
            position: toast.POSITION.TOP_RIGHT,
        });
    const handleChange = (e) => {
        setUpdateData({
            ...updateData,
            [e.target.name]: e.target.value,
        });
    };
    const handlePhoto = (e) => {
        setPhoto(e.target.files[0]);
        console.log(e.target.files[0]);
    };

    useEffect(() => {
        const getData = () => {
            axios
            .get(`${URL}/recipes/my-recipe/${id}`, {
                headers: {
                "Content-Type": "multipart/form-data",
                Authorization: token,
                },
            })
            .then((res) => {
                console.log(res);
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
        };
            getData();
    }, [id]);
    
    const postForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", updateData.title);
    formData.append("descriptions", updateData.descriptions);
    formData.append("category_id", updateData.category_id);
    formData.append("photo", photo);
    console.log(formData);
    axios
        .put(`${URL}/recipes/my-recipe/${id}`, formData, {
            headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": token,
            },
        })
        .then((res) => {
            console.log(res);
            navigate("/profile/recipesProfile");
        })
        .catch((err) => {
            toast.error("Failed:" + err.message);
        });
    };
    return (
        <div>
            <NavbarEdit />
            <ToastContainer />
            <div className="container">
                {data?.map((item, index) => (
                    <div key={index} className="container-fluid">
                        <form onSubmit={postForm}>
                            <div className="container mt-5">
                                <div className="row">
                                    <div className="col-md-8 position-relative">
                                    <img src={item.photo} alt="" className="img-fluid border rounded rounded-4 w-100"/>
                                    <div className="position-absolute top-50 start-50 translate-middle text-white w-50">
                                            <div
                                                action="/file-upload"
                                                className="dropzone bg-info position-absolute top-50 start-50 translate-middle text-center ms-5 text-black"
                                            >
                                                <div className="fallback">
                                                    <input
                                                        className="file"
                                                        type="file"
                                                        name="photo"
                                                        required
                                                        onChange={handlePhoto}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4"></div>
                            </div>
                            <div className="container mt-3">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        value={updateData.title}
                                        name="title"
                                        className="form-control bg-light border"
                                        placeholder="Title"
                                        required
                                        onChange={handleChange}
                                    />
                                    <label>{item.title}</label>
                                </div>
                            </div>
                            <div className="container">
                                <div className="form-floating">
                                    <textarea type="text" className="form-control bg-light border" value={ updateData.descriptions}
                                        name="descriptions" style={{ height:"300px" }}
                                        required
                                        onChange={handleChange}/>
                                    <label>{item.descriptions}</label>
                                </div>
                            </div>
                            <div className="container mt-3">
                                <div className="col-md-6 col-12 row">
                                    <div className="col-4">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control bg-light border" value={updateData.category_id} placeholder="Category"
                                                name="category_id"
                                                required
                                                onChange={handleChange} />
                                            <label>{item.category}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container mt-5 mb-5">
                                <div className="row row-col-12 mt-2">
                                    <div className="col"></div>
                                    <div className="col-3 text-center">
                                        <button type="submit" className="btn btn-warning text-white w-100" onClick={toastSuccess}>Update</button>
                                    </div>
                                    <div className="col"></div>
                                </div>
                            </div>
                        </form>
                    </div>))}
            </div>
        <FooterMenu/>
    </div>
    )
}
