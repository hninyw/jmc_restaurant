import React, { useState } from "react";
import "./SpecialMenu.css";

const bestSellers = [
  {
    id: 1,
    name: "Akyaw Sone",
    image: "/images/akyaw-sone.jpg",
    integrations: "Meat, Potatoes, Rice, Tomatoe",
    rating: 5,
    count: 150,
  },
  {
    id: 3,
    name: "Tea Leaf Salad",
    image: "/images/tea-leaf-myanmar.jpg",
    integrations: "Meat, Potatoes, Rice, Tomatoe",
    rating: 4.5,
    count: 95,
  },
  {
    id: 2,
    name: "Shan Noodles",
    image: "/images/Shan-Noodles.jpg",
    integrations: "Meat, Potatoes, Rice, Tomatoe",
    rating: 4,
    count: 80,
  },
  {
    id: 4,
    name: "Ohn No Khao Swe",
    image: "/images/Ohn-No-Khao-Swe.jpg",
    integrations: "Meat, Potatoes, Rice, Tomatoe",
    rating: 5,
    count: 80,
  },
  {
    id: 6,
    name: "Nan Gyi Thote",
    image: "/images/nan-gyi-thote.jpg",
    integrations: "Meat, Potatoes, Rice, Tomatoe",
    rating: 4,
    count: 70,
  },
  {
    id: 5,
    name: "Tofu Warm",
    image: "/images/tofu-warm.jpg",
    integrations: "Meat, Potatoes, Rice, Tomatoe",
    rating: 3.5,
    count: 60,
  },
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i)
      stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
    else if (rating >= i - 0.5)
      stars.push(<i key={i} className="bi bi-star-half text-warning"></i>);
    else stars.push(<i key={i} className="bi bi-star text-warning"></i>);
  }
  return stars;
};

export default function SpecialMenu() {
  return (
    <div className="bestseller-section">
      <div className="main-container">
        <div className="title text-center pb-4">
          <h1>Our</h1>
          <h3> Special Menus</h3>
        </div>
        {/* Cards */}
        <div className="row g-3">
          {bestSellers.map((item) => (
            <div key={item.id} className="col-12 col-sm-4 col-md-6">
              <div className="card best-seller-items m-0 h-100 border-0">
                <div className="row g-0 h-100">
                  <div className="col-md-6 img-col">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-6 d-flex flex-column justify-content-left text-center p-3">
                    <h5 className="card-title fw-bold mb-2">{item.name}</h5>
                    <div className="d-flex justify-content-left align-items-left gap-1 mb-2">
                      {renderStars(item.rating)}
                      <span
                        className="text-muted"
                        style={{ fontSize: "0.9rem" }}
                      >
                        ({item.count})
                      </span>
                    </div>
                    <p>{item.integrations}</p>
                    <button className="btn btn-special">ORDER</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <span className="d-flex justify-content-end pt-3">
          <a href="#!" className="fw-bold text-decoration-none">
            More Menu &raquo;
          </a>
        </span>
      </div>
    </div>
  );
}
