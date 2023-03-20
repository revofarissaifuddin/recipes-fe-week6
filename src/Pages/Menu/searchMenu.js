import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FooterMenu from "../../Component/Footer";
import NavbarMenu from "../../Component/NavbarMenu";
import axios from "axios";

export default function SearchMenu() {
  const [searchMenu, setSearchMenu] = useState("");
  const [sortMenu] = useState("DESC");
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);
  
  const getData = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/recipes/all-recipe?search=${searchMenu}`
      )
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const newRecipes = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/recipes/all-recipe?sort=${sortMenu}`
      )
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /* // pageination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = 5;
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.map(indexOfFirstPost, indexOfLastPost);
  const npage = Math.ceil(data.length / postsPerPage);
  const number = [...Array(npage + 1).keys()].slice(1);
  
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // destructering */


  return (
    <div>
      <NavbarMenu />
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-6">
            <div className="row row-cols-1 row-cols-md-1 ms-5">
              <div className="col">
                <h1>Discover Recipe</h1>
              </div>
              <div className="col">
                <h1>& Delicious Food</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-6">
            <div className="row row-cols-1 row-cols-md-1 ms-5">
              <div className="input-group">
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setSearchMenu(e.target.value);
                  }}
                  className="form-control me-5"
                  placeholder="Search..."
                  aria-label="Recipes"
                  aria-describedby="button-addon2"
                />
                <button
                  onClick={(e) => getData(e)}
                  className="btn btn-warning text-white ms-5 w-25"
                  type="button"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-4">
            <div className="row row-cols-1 row-cols-md-4 ms-5">
              <div className="col">
                <input
                  type="button"
                  className="btn btn-sm bg-warning text-white w-100"
                  value="New"
                  onClick={(e) => newRecipes(e)}
                ></input>
              </div>
              <div className="col">
                <button className="btn btn-sm bg-warning text-white w-100">
                  Popular
                </button>
              </div>
              <div className="col">
                <button className="btn btn-sm bg-success text-white w-100">
                  Vegetarian
                </button>
              </div>
              <div className="col">
                <button className="btn btn-sm bg-success text-white w-100">
                  Breakfast
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-6">
            <div className="list-group">
              <div className="container-fluid text-center">
                {data
                  ?.filter((item) => {
                    if (searchMenu === "") {
                      return item;
                    } else if (
                      item.title
                        .toLowerCase()
                        .includes(searchMenu.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .map((item, index) => (
                    <div key={index} className="row row-cols-md-2 ms-5 mt-5">
                      <div className="col">
                        <div className="row">
                          <img
                            src={item.photo}
                            alt=""
                            className="border-5 rounded-4"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="" id="title">
                            <h5 className="text-start mt-2 fw-bold">
                              <Link
                                to={`/menu/detailMenu/${item.id}`}
                                className="Link"
                              >
                                {item.title}
                              </Link>
                            </h5>
                          </div>
                          <div className="mt-2" id="Ingredients">
                            <p className="text-start">{item.descriptions}</p>
                          </div>
                          <div className="mt-2">
                            <button className="btn btn-warning btn-sm text-white shadow-none  w-100">
                              10 Likes - 12 Command - 3 Bookmark
                            </button>
                          </div>
                          <div className="col-4 mt-3">
                            <div className="row">
                              <div className="col-3">
                                <img
                                  src="./user.png"
                                  alt=""
                                  className="rounded-circle align-items-center"
                                  style={{ width: "50px" }}
                                />
                              </div>
                              <div className="col-4">
                                <h6 className="text-center mt-3 ms-3 w-25">
                                  <Link to={"/"} className="Link">
                                    {item.creator}
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="controler mt-5">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item ">
                <Link to={"/"} className="Link page-link border-0 bg-light">
                  Show 1-5 from 20
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link bg-warning text-white">Next</Link>
              </li>
            </ul>
          </nav>
        </div>

        
      </div>
      <FooterMenu />
    </div>
  );
}
