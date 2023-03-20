import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../Storages/Actions/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkboxHandler = () => {
    setAgree(!agree);
  };
  const btnHandler = () => {
    alert("I agree to terms & conditions");
  };

  const postData = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    let data = {
      email,
      password,
    };
    dispatch(loginUser(data, navigate));
  };
  const toastDanger = () =>
    toast.danger("Login Fail", {
      position: toast.POSITION.TOP_RIGHT,
    });
  const toastSuccess = () =>
    toast.success("Login Success", {
      position: toast.POSITION.TOP_RIGHT,
    });
  return (
    <div className="Login">
      <ToastContainer />
      <div className="container-fluid" id="login-page">
        <div className="col-lg-6 position-absolute top-50 start-50 translate-middle">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8 p-5 w-50 text-center">
              <h3 className="text-warning">Recipe...</h3>
            </div>
            <div className="mt-5">
              <h3 className="text-warning text-center">Welcome</h3>
              <p className="text-body-secondary text-center fs-6">
                Login in into your exiting account
              </p>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="w-50">
              <form onSubmit={postData} className="mt-5">
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    id="agree"
                    onChange={checkboxHandler}
                    className="form-check-input"
                  />
                  <label className="form-check-label">
                    I agree to terms & conditions
                  </label>
                </div>
                <div className="mb-3">
                  <button
                    disabled={!agree}
                    type="submit"
                    className="btn btn-warning text-white shadow-none p-1 w-100"
                    onClick={btnHandler}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          {user.isLoading && toastSuccess()}
          {user.errorMessage && toastDanger()}
          <div className="my-2 mt-5">
            <p className="text-center">
              Don't have an account?
              <Link to={"/auth/register"} className="Link text-warning">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
