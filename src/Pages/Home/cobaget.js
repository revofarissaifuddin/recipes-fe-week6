import { useState, useEffect } from "react";
import NavbarMenu from "../../Component/NavbarMenu";
import axios from "axios";

let token ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwOGE1NmQyLWZlNWMtNDFlZi1hYmIwLWY5MmMxYzQ5OWQyMiIsImVtYWlsIjoicmV2b0BnbWFpbC5jb20iLCJmdWxsbmFtZSI6InNhaWZ1ZGRpbiIsInBob3RvIjpudWxsLCJ2ZXJpZiI6MSwib3RwIjoiNjQ3MjIxIiwiY3JlYXRlX2F0IjoiMjAyMy0wMi0yNlQwODo1Nzo1OC44NDZaIiwiaWF0IjoxNjc4NDg5MzExLCJleHAiOjE2Nzg0OTI5MTF9.EJVfUAZe0qIVilbtVTFa6OxfRkbwzVnmRIeFJuMPCTY";
let url = "https://fair-lime-salamander-boot.cyclic.app/recipes/my-recipe";

export default function Home() {
    const [data, setData] = useState();
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios
            .get(url, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": token
                }
            })
        .then((res) => {
            console.log(res);
            setData(res.data.data);
        })
        .then((err) => {
            console.log(err);
        });
    };
    return (
        <div>
        <NavbarMenu />
        <h1>Home</h1>
        <div className="container">
            {data?.map((item, index) => (
            <div key={index + 1}>
                    <h5>{item.title}</h5>
                    <img src={item.photo} alt="" className="img-fluid" style={{width: "300px"} }/>
                </div>
                ))}
                </div>
                
                </div>
                );
            }
            // <img className='img-thumbnail' src={item.photo} style={{height:"100px"}}/>
