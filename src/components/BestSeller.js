import React, { useState } from "react";
import "./BestSeller.css";

const bestSellers = [
  {
    id: 1,
    name: "Akyaw Sone",
    image: "/images/akyaw-sone.jpg",
    rating: 5,
    count: 150,
  },
  {
    id: 3,
    name: "Tea Leaf Salad",
    image: "/images/tea-leaf-myanmar.jpg",
    rating: 4.5,
    count: 95,
  },
  {
    id: 2,
    name: "Shan Noodles",
    image: "/images/Shan-Noodles.jpg",
    rating: 4,
    count: 80,
  },
  {
    id: 4,
    name: "Ohn No Khao Swe",
    image: "/images/Ohn-No-Khao-Swe.jpg",
    rating: 5,
    count: 80,
  },
  {
    id: 6,
    name: "Nan Gyi Thote",
    image: "/images/nan-gyi-thote.jpg",
    rating: 4,
    count: 70,
  },
  {
    id: 5,
    name: "tofu-warm",
    image: "/images/tofu-warm.jpg",
    rating: 3.5,
    count: 60,
  },
  {
    id: 7,
    name: "si-htamin",
    image: "/images/si-htamin.jpg",
    rating: 5,
    count: 50,
  },
];

// Helper to render stars
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

export default function BestSellerSection() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  const handleNext = () => {
    if (startIndex + itemsPerPage < bestSellers.length)
      setStartIndex(startIndex + itemsPerPage);
  };
  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0)
      setStartIndex(startIndex - itemsPerPage);
  };
  const displayedItems = bestSellers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="container bestseller-section my-5">
      {" "}
      <h2 className="mb-4">Best Sellers</h2>{" "}
      <div className="row align-items-center">
        {" "}
        {/* Prev button */}{" "}
        <div className="col-auto">
          {" "}
          <button
            className="btn btn-secondary"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            {" "}
            ◀{" "}
          </button>{" "}
        </div>{" "}
        {/* Cards */}{" "}
        <div className="col">
          {" "}
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
            {" "}
            {displayedItems.map((item) => (
              <div key={item.id} className="col">
                {" "}
                <div className="card position-relative best-seller-items h-100">
                  {" "}
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: "250px", objectFit: "cover" }}
                  />{" "}
                  <div className="card-body p-2 text-center">
                    {" "}
                    <p className="card-text fw-semibold mb-0">
                      {item.name}
                    </p>{" "}
                    <div className="d-flex justify-content-center align-items-center gap-1">
                      {" "}
                      {renderStars(item.rating)}{" "}
                      <span
                        className="text-muted"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {" "}
                        ({item.count}){" "}
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  {/* Details button overlay */}{" "}
                  <button
                    className="btn btn-primary position-absolute top-50 start-50 translate-middle opacity-0"
                    style={{ transition: "opacity 0.3s" }}
                  >
                    {" "}
                    Details{" "}
                  </button>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
        {/* Next button */}{" "}
        <div className="col-auto">
          {" "}
          <button
            className="btn btn-secondary"
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= bestSellers.length}
          >
            {" "}
            ▶{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
