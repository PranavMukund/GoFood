import React from "react";

export default function Carousel() {
    return (
        <div>
            <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                style={{ objectFit: "contain !important " }}
            >
                <div className="carousel-inner">
                    <div className="carousel-caption" style={{ zIndex: "10" }}>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success bg-success " type="submit">
                                Search
                            </button>
                        </form>
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
    );
}
