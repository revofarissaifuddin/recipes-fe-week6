import React, { useState } from "react";
import NavbarLandingPage from "../../Component/NavbarLandingPage";
import FooterMenu from "../../Component/Footer";
import { Link } from "react-router-dom";
import iconSearch from "../../Images/search.png";
import homeImg from "../../Images/eggsanwich.png";
// import axios from "axios";

export default function Home() {
  // const [data, setData] = useState;
  return (
    <div>
      <NavbarLandingPage />
      <section className="z-0">
        <div className="row row-cols-1 d-flex align-items-center">
          <div className="col-6 ">
            <div className="row row-cols-1 row-cols-md-1 ms-5">
              <div className="col mt-5">
                <h1>Discover Recipe</h1>
              </div>
              <div className="col">
                <h1>& Delicious Food</h1>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-lg border-0 text-light-emphasis text-start w-75 mt-5"
                  style={{ background: "#EFEFEF" }}
                >
                  <img src={iconSearch} alt="" />
                  <Link to={"/menu/searchMenu"} className="Link ms-2">
                    search restaurant, food
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-3 z-2">
            <div className="d-flex justify-content-enter">
              <img
                src={homeImg}
                alt=""
                className="img-fluid rounded float-end rounded"
                style={{
                  maxWidth: "30vw",
                  maxHeight: "35vw",
                  zIndex: "2",
                }}
              />
            </div>
          </div>
          <div className="col-3">
            <div
              className="bg-warning lg w-100 z-0"
              style={{ height: "1000px" }}
            ></div>
          </div>
        </div>
        <div className="mt-5 ms-5">
          <h2
            className="border-start border-5 border-warning"
            style={{ "--bs-border-width": " 10px", marginTop: "-100px" }}
          >
            Popular For You !
          </h2>
        </div>
      </section>

      <section className="mt-5 ms-5">
        <div className="row row-cols-lg-2">
          <div className="col-6">
            <div className="row">
              <div className="d-flex justify-content-start pt-5 mt-5">
                <img
                  src="../images/img-2.png"
                  alt=""
                  className="img-fluid border rounded"
                  style={{ maxWidth: "25vw", maxHeight: " 25vw" }}
                />
                <div className="z-2 position-absolute p-5 rounded-3 border-5"></div>
              </div>
            </div>
          </div>
          <div className="col-6  d-flex align-items-center">
            <div className="row pt-5 mt-5">
              <div className="" id="title">
                <h2 className="text-start mt-2 fw-bold w-50">
                  Healthy Bone Broth Ramen (Quick & Easy)
                </h2>
              </div>
              <div className="mt-2" id="">
                <p className="text-start">
                  Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen
                  in a hurry? That’s right!
                </p>
              </div>
              <div className="mt-4">
                <div className="col">
                  <button className="btn btn-warning btn-lg text-white text-sm-center shadow-none me-4">
                    <Link className="Link">Learn More</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 ms-5 mb-5">
        <div className="mt-5">
          <h2
            className="border-start border-5 border-warning"
            style={{ "--bs-border-width": "10px" }}
          >
            New Recipes
          </h2>
        </div>
        <div className="row row-cols-lg-2">
          <div className="col-6">
            <div className="row">
              <div className="d-flex justify-content-start pt-5 mt-5">
                <img
                  src="../images/img-2.png"
                  alt=""
                  className="img-fluid border rounded"
                  style={{ maxWidth: "25vw", maxHeight: " 25vw" }}
                />
                <div className="z-2 position-absolute p-5 rounded-3 border-5"></div>
              </div>
            </div>
          </div>
          <div className="col-6  d-flex align-items-center">
            <div className="row pt-5 mt-5">
              <div className="" id="title">
                <h2 className="text-start mt-2 fw-bold w-50">
                  Healthy Bone Broth Ramen (Quick & Easy)
                </h2>
              </div>
              <div className="mt-2" id="">
                <p className="text-start">
                  Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen
                  in a hurry? That’s right!
                </p>
              </div>
              <div className="mt-4">
                <div className="col">
                  <button className="btn btn-warning btn-lg text-white text-sm-center shadow-none me-4">
                    <Link className="Link">Learn More</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 ms-5 mb-5">
        <div className="" style={{ marginTop: "300px" }}>
          <h2
            className="border-start border-5 border-warning"
            style={{ "--bs-border-width": "10px" }}
          >
            Popular Recipe
          </h2>
        </div>
        <div className="row d-flex justify-content-around">
          <div className="col-3">
            <div className="card ms-5" style={{ maxWidth: "30rem" }}>
              <img
                src="../images/Chiken kare.png"
                className="card-img-top"
                alt="..."
              />
              <p
                className="card-text z-2 w-25 ms-3"
                style={{ marginTop: "-50px" }}
              >
                Chiken Kare
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="card ms-5" style={{ maxWidth: "30rem" }}>
              <img
                src="../images/boomchicken.png"
                className="card-img-top"
                alt="..."
              />
              <p
                className="card-text z-2 w-25 ms-3"
                style={{ marginTop: "-50px" }}
              >
                Bomb Chiken
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="card ms-5" style={{ maxWidth: "30rem" }}>
              <img
                src="../images/banana.png"
                className="card-img-top"
                alt="..."
              />
              <p
                className="card-text z-2 w-25 ms-3"
                style={{ marginTop: "-75px" }}
              >
                Banana Smothie Pop
              </p>
            </div>
          </div>
        </div>
      </section>
      <FooterMenu />
    </div>
  );
}
