import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { regUser } from "../../Storages/Actions/auth";
export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    setAgree(!agree);
  };
  const btnHandler = () => {
    alert("I agree to terms & conditions");
  };
  const regrisUser = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };
    dispatch(regUser(data, navigate));
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="col-lg-3 position-absolute top-50 start-50 translate-middle">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8 p-5 w-50 text-center">
              <h3 className="text-warning">Recipe...</h3>
            </div>
            <div className="mt-5">
              <h2 className="text-warning text-center">Let’s Get Started !</h2>
              <p className="text-body-secondary text-center fs-6">
                Create new account to access all features
              </p>
            </div>
            <form onSubmit={regrisUser} className="mt-5">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
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
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={btnHandler}
                >
                  Register Account
                </button>
              </div>
            </form>
            <div className="my-2 mt-0 mb-5">
              <p className="text-left">
                Forgot Your Password?
                <Link to={"/auth/forgotPassword"} className="Link text-warning">
                  Click Here
                </Link>
              </p>
            </div>
            <div className="my-2 mt-5">
              <p className="text-center">
                Already have account?
                <Link to={"/auth/login"} className="Link text-warning">
                  Log in Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
