import { useEffect, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FooterMenu from "../../Component/Footer";
import NavbarDetail from "../../Component/NavbarDetail";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

let token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwOGE1NmQyLWZlNWMtNDFlZi1hYmIwLWY5MmMxYzQ5OWQyMiIsImVtYWlsIjoicmV2b0BnbWFpbC5jb20iLCJmdWxsbmFtZSI6InJldm8iLCJwaG90byI6bnVsbCwidmVyaWYiOjEsIm90cCI6IjY0NzIyMSIsImNyZWF0ZV9hdCI6IjIwMjMtMDItMjZUMDg6NTc6NTguODQ2WiIsImlhdCI6MTY3ODc1MzE3MCwiZXhwIjoxNjc4ODM5NTcwfQ.DDkp-dkrmdFgaPgLhL46DA0LvtLPT9GP87R_S9qO68o";
let DETAILMENU_URL = process.env.REACT_APP_BASE_URL;
export default function DetailMenu() {
  const { id } = useParams();
  const [data, setData] = useState();
    
  useEffect(() => {
      const getData = () => {
        axios
          .get(`${DETAILMENU_URL}/recipes/my-recipe/${id}`, {
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
    },[id]);

    
  return (
    <div>
      <NavbarDetail />
      <div className="container ">
        <div className="row pt-5">
          <div className="col ">
            <div className="row">
              <div className="card col-3 border-start border-3 border-warning ">
                <img
                  src=""
                  alt=""
                  className="rounded-circle"
                  style={{ width: "50px" }}
                />
              </div>
              <div className="col">
                <h6>
                  <Link></Link>
                </h6>
                <h6 className="fw-bolder">Logout</h6>
              </div>
            </div>
          </div>
          <div className="col-6"></div>
          <div className="col text-end">
            <h5>21 February 2023</h5>
            <h5>20 Like - 2 Comments</h5>
          </div>
        </div>
      </div>
        <div className="container">
          {data?.map((item, index) => (
        <div key={index+1} className="container">
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
                <img src={item.photo} alt="" className="border rounded" />
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
                  <img
                    src="../../images/BiodataR.jpg"
                    alt=""
                    className="rounded-circle img-fluid"
                    style={{ width: "50px" }}
                  />
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
                  <img
                    src="../../images/BiodataR.jpg"
                    alt=""
                    className="rounded-circle img-fluid"
                    style={{ width: "50px" }}
                  />
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
