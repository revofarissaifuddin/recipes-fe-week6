import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMenu } from "../../Storages/Actions/menu";
import FooterMenu from "../../Component/Footer";
import NavbarEdit from "../../Component/NavbarEdit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddMenu() {
  const [inputData, setInputData] = useState({
    title: "",
    descriptions: "",
    category_id: "",
  });
  const [photo, setPhoto] = useState();
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
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const add_menu = useSelector((state) => state.add_menu);
  
  
  const postForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", inputData.title);
    formData.append("descriptions", inputData.descriptions);
    formData.append("category_id", inputData.category_id);
    formData.append("photo", photo);
    console.log(formData);
    dispatch(addMenu(formData, navigate));
  };

  const toastDanger = () =>
    toast.danger("Add Menu Fail", {
      position: toast.POSITION.TOP_RIGHT,
    });
  const toastSuccess = () =>
    toast.success("Add Menu Success", {
      position: toast.POSITION.TOP_RIGHT,
    });
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
                >
                  Post
                </button>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </form>
      {add_menu.isLoading && toastSuccess()}
      {add_menu.errorMessage && toastDanger()}
      <FooterMenu />
    </div>
  );
}
