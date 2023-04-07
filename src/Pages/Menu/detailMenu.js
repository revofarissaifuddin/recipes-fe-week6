import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {detailMenu} from"../../Storages/Actions/menu"
import FooterMenu from "../../Component/Footer";
import NavbarDetail from "../../Component/NavbarDetail";
import { Link, useParams, useNavigate } from "react-router-dom";
import Moment from "moment";
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
export default function DetailMenu() {
  const { id } = useParams();
  const name = localStorage.getItem("name");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const detail = useSelector((state) => state.detail_menu);

  const logout = () => {
    localStorage.clear();
    window.location.reload(false);
    navigate("/home");
  };

  useEffect(() => {
    dispatch(detailMenu(navigate, id));
  }, [dispatch, id, navigate]);

  return (
    <div>
      <NavbarDetail />
      <div className="container ">
        <div className="row pt-5">
          <div className="col ">
            <div className="row">
              <div className="card col-3 border-start border-3 border-warning ">
                <Avatar />
              </div>
              <div className="col">
                <h6>
                  <Link to={"/profile/detailProfile"} className="Link">
                    {name ? name : "Users"}
                  </Link>
                </h6>
                <h6>
                  {name && (
                    <button
                      variant="text"
                      className="border-0 bg-white text-start"
                      varian
                      onClick={() => logout()}
                    >
                      <strong>logout</strong>
                    </button>
                  )}
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6"></div>
          <div className="col text-end">
            {detail.data?.map((item, index) => (
              <div key={index + 1}>
                <h5>{Moment(item.posttime).format("LL")}</h5>
                <h5>20 Like - 2 Comments</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        {detail.data?.map((item, index) => (
          <div key={index} className="container">
            <div className="d-flex justify-content-center">
              <div className="row row-cols-3 mt-5 text-center">
                <div className="col-md-12">
                  <h1 className="cdm-h1">{item.title}</h1>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="row row-cols-3 mt-5">
                <div className="col-md-12">
                  <img
                    src={item.photo}
                    alt=""
                    className="border rounded"
                    style={{ minWidth: "200px", maxWidth: "750px" }}
                  />
                </div>
              </div>
            </div>

            <div className="container mb-2 text-center">
              <div className="row mt-5">
                <div className="col-4">
                  <h5>Ingredients</h5>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-4">
                  <div className="row text-start">
                    <p className="w-50">{item.descriptions}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container mb-2">
        <div className="row">
          <div className="col ">
            <div className="row">
              <div className="col-3">
                <img
                  src="../../images/bookwhite.png"
                  alt=""
                  className="bg-warning p-1 rounded "
                  style={{ width: "20px" }}
                />
                <img
                  src="../../images/like.png"
                  alt=""
                  className="border border-warning p-1 rounded"
                  style={{ width: "20px" }}
                />
              </div>
            </div>
          </div>
          <div className="col-6"></div>
          <div className="col"></div>
        </div>
      </div>
      <div className="container border-top border-bottom border-3 border-warning p-3">
        <div className="row">
          <div className="col ">
            <div className="row">
              <div className="col-3 ">
                <Avatar />
              </div>
              <div className="col">
                <h6>
                  <a href="../Edit-Profile/detail-profile.html">Revo</a>
                </h6>
                <h6 className="fw-bolder"> 20 Recipes</h6>
              </div>
            </div>
          </div>
          <div className="col-6 text-sm-start border-start border-3 border-warning">
            <p className="m-3">
              Wow, I just made this and it was delicious! Thanks for sharing!
            </p>
          </div>
          <div className="col"></div>
        </div>

        <div className="row mt-5">
          <div className="col ">
            <div className="row">
              <div className="col-3 ">
                <Avatar />
              </div>
              <div className="col">
                <h6>
                  <a
                    href="../Edit-Profile/detail-profile.html"
                    style={{ color: "inherit" }}
                  >
                    Revo
                  </a>
                </h6>
                <h6 className="fw-bolder"> 20 Recipes</h6>
              </div>
            </div>
          </div>
          <div className="col-6 text-sm-start border-start border-3 border-warning">
            <p className="m-3">So simple and delicious!</p>
          </div>
          <div className="col"></div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row row-cols-2 mt-5">
          <div className="col">
            <div className="form-floating">
              <textarea
                className="form-control rounded border-1 bg-light"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              ></textarea>
              <label>Your comment here!</label>
            </div>
          </div>
        </div>
        <div className="row row-cols-4 mt-2">
          <div className="col">
            <button className="btn btn-warning text-white">
              Send a comment
            </button>
          </div>
        </div>
      </div>
      <FooterMenu />
    </div>
  );
}
