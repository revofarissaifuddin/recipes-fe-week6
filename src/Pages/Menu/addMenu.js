import { useState } from "react";
import axios from "axios";
import FooterMenu from "../../Component/Footer";
import NavbarEdit from "../../Component/NavbarEdit";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwOGE1NmQyLWZlNWMtNDFlZi1hYmIwLWY5MmMxYzQ5OWQyMiIsImVtYWlsIjoicmV2b0BnbWFpbC5jb20iLCJmdWxsbmFtZSI6InJldm8iLCJwaG90byI6bnVsbCwidmVyaWYiOjEsIm90cCI6IjY0NzIyMSIsImNyZWF0ZV9hdCI6IjIwMjMtMDItMjZUMDg6NTc6NTguODQ2WiIsImlhdCI6MTY3ODc1MzE3MCwiZXhwIjoxNjc4ODM5NTcwfQ.DDkp-dkrmdFgaPgLhL46DA0LvtLPT9GP87R_S9qO68o";
let ADD_URL = process.env.REACT_APP_BASE_URL;
export default function AddMenu() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    title: "",
    descriptions: "",
    category_id: "",
  });
  const [photo, setPhoto] = useState();
  const toastSuccess = () =>
    toast.success("Add menu successfully.", {
      position: toast.POSITION.TOP_RIGHT,
    });
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const postForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", inputData.title);
    formData.append("descriptions", inputData.descriptions);
    formData.append("category_id", inputData.category_id);
    formData.append("photo", photo);
    console.log(formData);
    axios
      .post(`${ADD_URL}/recipes`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `${token}`,
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
      <form onSubmit={postForm}>
        <div className="container mt-5">
          <div className="card border-0 position-relative">
            <div
              className="card rounded w-100 bg-light"
              style={{ height: "350px" }}
            ></div>
            <div
              action="/file-upload"
              className="dropzone position-absolute top-50 start-50 translate-middle text-center ms-5 text-black"
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
        <div className="container mt-3">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={inputData.title}
              name="title"
              className="form-control bg-light border"
              placeholder="Title"
              required
              onChange={handleChange}
            />
            <label>Title</label>
          </div>
        </div>
        <div className="container">
          <div className="form-floating">
            <input
              className="form-control bg-light border"
              placeholder="Ingredients"
              type="text"
              value={inputData.descriptions}
              name="descriptions"
              onChange={handleChange}
            />
            <label>Ingredients</label>
          </div>
        </div>
        <div className="container mt-3">
          <div className="col-md-6 col-12 row">
            <div className="col-4">
              <div className="form-floating mb-3">
                <input
                  type="number"
                  value={inputData.category_id}
                  className="form-control bg-light border"
                  placeholder="Category"
                  name="category_id"
                  onChange={handleChange}
                />
                <label>Category</label>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          <div className="container text-center">
            <div className="row">
              <div className="col"></div>
              <div className="col">
                <button
                  type="submit"
                  className="btn btn-warning text-white w-100 p-2"
                  onClick={toastSuccess}
                >
                  Post
                </button>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </form>
      <FooterMenu />
    </div>
  );
}
