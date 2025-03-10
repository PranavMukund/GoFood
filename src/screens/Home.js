import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";


export default function Home() {

  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("https://go-foodbackend-pranavs-projects-5b57fed6.vercel.app/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
    //console.log(response[0], response[1]);
  }


  useEffect(() => {
    loadData()
  }, [])


  //
  return (
    <div className=" font-monospace" style={{ background: '#E1F0DA' }} >
      <div>
        {" "}
        <Navbar />{" "}
      </div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important " }}
        >
          <div className="carousel-inner">
            <div className="carousel-caption" style={{ zIndex: "10", width: "550px", margin: "  0px 0px 100px 0px" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2 input-group-sm input-group-btn "
                  type="search"
                  placeholder="Type your favourite dish ..."
                  aria-label="Search"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value) }}
                />
                {/*<button className="btn btn-outline-success bg-success " type="submit">
                  Search
                </button>*/}
              </div>
            </div>
            <div className="carousel-item active" style={{ height: "650px" }}>
              <img
                src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="d-block w-100"
                alt="jjj"
              />
            </div>
            <div className="carousel-item" style={{ height: "650px" }}>
              <img
                src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" style={{ height: "650px" }}>
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='container'>
        {
          //foodCat !== []
          (foodCat && foodCat.length) > 0

            ? (foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id}
                    className="fs-2 m-3 fw-bold ">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem != []
                    ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                      .map(filterItems => {
                        return (
                          <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                            <Card foodItem={filterItems}
                              options={filterItems.options[0]}
                            >

                            </Card>
                          </div>
                        )
                      }
                      ) :
                    <div>No Such Data Found</div>}
                </div>
              )
            })
            )
            : <div>"""""""""</div>
        }



      </div>
      <div>
        {" "}
        <Footer />{" "}
      </div>
    </div>
  );
}
