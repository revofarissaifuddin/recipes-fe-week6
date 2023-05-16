import React from 'react';
import { Link } from 'react-router-dom';
import "../../Css/navbarLandingPage.css";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
function NavbarLandingPage() {
    return (
      <div className="container-fluid">
        <div className="container-fluid m-lg-auto z-1 fixed-top">
          <nav className="navbar navbar-expand-lg bg-body-tertiary bg-opacity-10">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle as={NavLink}></Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to={"/auth/register"} className="Link">
                        Register
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to={"/auth/login"} className="Link">
                        Login
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to={"/menu/searchMenu"} className="Link">
                        Search Menu
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </span>
            </button>
            <div className=" container-fluid row pt-4">
              <div className=" collapse navbar-collapse" id="navbarNav">
                <div
                  className="collapse navbar-collapse col-md-6 col-12 row ps-5"
                  id="navbarNav"
                >
                  <div className="col-3 nav-item">
                    <h5>
                      <Link to={"/auth/register"} className="Link">
                        Register
                      </Link>
                    </h5>
                  </div>
                  <div className="col-3 nav-item text-start">
                    <h5>
                      <Link to={"/auth/login"} className="Link">
                        Login
                      </Link>
                    </h5>
                  </div>
                  <div className="col-3 nav-item text-start">
                    <h5>
                      <Link to={"/menu/searchMenu"} className="Link">
                        Search Menu
                      </Link>
                    </h5>
                  </div>
                </div>
                <div className="col-md-6  col-12 row">
                  <div className="col-6"></div>
                  <div className="col-6"></div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
}

export default NavbarLandingPage;
