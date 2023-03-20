import { useState, useEffect } from "react";
import FooterMenu from "../../Component/Footer";
import NavbarEdit from "../../Component/NavbarEdit";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEditMenu, updateEditMenu } from "../../Storages/Actions/menu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditMenu() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const editmenu = useSelector((state) => state.edit_menu);
  const updateMenu = useSelector((state) => state.update_menu);
  const [photo, setPhoto] = useState();

  const [updateData, setUpdateData] = useState({
    title: "",
    descriptions: "",
    category_id: "",
  });
  const toastSuccess = () =>
    toast.success("Update data successfully.", {
      position: toast.POSITION.TOP_RIGHT,
    });
  const handleChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  useEffect(() => {
    dispatch(getEditMenu(navigate,id))
  }, [dispatch, id, navigate])

  const postForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", updateData.title);
    formData.append("descriptions", updateData.descriptions);
    formData.append("category_id", updateData.category_id);
    formData.append("photo", photo);
    console.log(formData);
    dispatch(updateEditMenu(formData,navigate,id));
  };
  return (
    <div>
      <NavbarEdit />
      <ToastContainer />
      <div className="container">
        {(editmenu||updateMenu).data?.map((item, index) => (
          <div key={index} className="container-fluid">
            <form onSubmit={postForm}>
              <div className="container mt-5">
                <div className="row">
                  <div className="col-md-8 position-relative">
                    <img
                      src={item.photo}
                      alt=""
                      className="img-fluid border rounded rounded-4 w-100"
                    />
                    <div className="position-absolute top-50 start-50 translate-middle text-white w-50">
                      <div
                        action="/file-upload"
                        className="dropzone bg-info position-absolute top-50 start-50 translate-middle text-center ms-5 text-black"
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
                </div>
                <div className="col-4"></div>
              </div>
              <div className="container mt-3">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={updateData.title}
                    name="title"
                    className="form-control bg-light border"
                    placeholder="Title"
                    required
                    onChange={handleChange}
                  />
                  <label>{item.title}</label>
                </div>
              </div>
              <div className="container">
                <div className="form-floating">
                  <textarea
                    type="text"
                    className="form-control bg-light border"
                    value={updateData.descriptions}
                    name="descriptions"
                    style={{ height: "300px" }}
                    required
                    onChange={handleChange}
                  />
                  <label>{item.descriptions}</label>
                </div>
              </div>
              <div className="container mt-3">
                <div className="col-md-6 col-12 row">
                  <div className="col-4">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control bg-light border"
                        value={updateData.category_id}
                        placeholder="Category"
                        name="category_id"
                        required
                        onChange={handleChange}
                      />
                      <label>{item.category}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container mt-5 mb-5">
                <div className="row row-col-12 mt-2">
                  <div className="col"></div>
                  <div className="col-3 text-center">
                    <button
                      type="submit"
                      className="btn btn-warning text-white w-100"
                      
                    >
                      Update
                    </button>
                  </div>
                  <div className="col"></div>
                </div>
              </div>
            </form>
          </div>
        ))}
      </div>
      <FooterMenu />
    </div>
  );
}
