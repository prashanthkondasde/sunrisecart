import React from 'react'

const Carosuel = () => {
  return (
    <>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
            <img
                src="images/slide-1.jpg"
                className="d-block w-100"
                alt="slide1img"
            />

            <div
                className="carousel-caption d-none d-md-block text-start"
                style={{ top: "100px", bottom: "auto",color: "black", left: "5%", right: "50%" }}
            >
                <button type="button" className="btn btn-warning">Opening Sale Discount 50%</button>
                <h1>SuperMarket For Fresh Grocery</h1>
                <p style={{color:"grey"}}>Introduced a new model for online grocery shopping and convenient home delivery.</p>

                <button className="btn btn-dark">
                Shop Now
                </button>
            </div>
            </div>
                <div className="carousel-item">
                <img src="images/slide-2.jpg" className="d-block w-100" alt="slide2img"/>
                <div
                className="carousel-caption d-none d-md-block text-start"
                style={{ top: "100px", bottom: "auto",color: "black", left: "5%", right: "50%"
            }}
            >
                    <button type="button" className="btn btn-warning">Free Shipping - orders over $100</button>
                    <h1>Free Shipping on orders above $100</h1>
                    <p style={{color:"grey"}}>Free Shipping to First-Time Customers Only, After promotions and discounts will be applied.</p>
                    <button type="button" className="btn btn-secondary">Shop Now </button>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
  )
}

export default Carosuel