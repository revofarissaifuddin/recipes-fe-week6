import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import NavbarDetail from "../../Component/NavbarDetail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import avatar from "../../Images/user.png";

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

let URL = process.env.REACT_APP_BASE_URL;
export default function DetailProfile() {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState({
    fullname: "",
    email: "",
  });

  const handleChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };

  const postForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", updateData.fullname);
    formData.append("email", updateData.email);
    axios
      .put(`${URL}/users/my-users/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/profile/detailProfile");
        toast.success("Update data successfully.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => {
        toast.error("Failed:" + err.message);
      });
  };
  return (
    <div>
      <NavbarDetail />
      <ToastContainer />
      <div className="container col-md-3 position-absolute top-50 start-50 translate-middle">
        <div className="row justify-content-center align-items-center">
          <div className="text-center">
            <Avatar />
          </div>
          <div className="mt-2">
            <p className="text-body-secondary text-center fs-5">
              Change Profile Picture
            </p>
          </div>
        </div>
        <form onSubmit={postForm} className="mt-5">
          <div className="mb-3">
            <label className="form-label">Full name</label>
            <input
              type="text"
              value={updateData.fullname}
              name="fullname"
              className="form-control"
              placeholder={name}
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={updateData.email}
              name="email"
              required
              onChange={handleChange}
              className="form-control"
              placeholder={email}
            />
          </div>
          <div className="mb-0 mt-5">
            <button
              type="submit"
              className="btn btn-warning text-white shadow-none p-1 w-100"
            >
              Update Profile
            </button>
          </div>
        </form>
        <div className="my-2 mt-3">
          <p className="text-left">
            Change Password?
            <Link to={"/auth/forgotPassword"} className="Link text-warning">
              {" "}
              Click Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
