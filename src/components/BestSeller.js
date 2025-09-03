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
    name: "Tofu Warm",
    image: "/images/tofu-warm.jpg",
    rating: 3.5,
    count: 60,
  },
  {
    id: 7,
    name: "Si Htamin",
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(bestSellers.length / itemsPerPage);

  const displayedItems = bestSellers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container bestseller-section my-5">
      <h2 className="mb-4">Best Sellers</h2>

      {/* Cards */}
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
        {displayedItems.map((item) => (
          <div key={item.id} className="col">
            <div className="card position-relative best-seller-items h-100">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body p-2 text-center">
                <p className="card-text fw-semibold mb-0">{item.name}</p>
                <div className="d-flex justify-content-center align-items-center gap-1">
                  {renderStars(item.rating)}
                  <span className="text-muted" style={{ fontSize: "0.9rem" }}>
                    ({item.count})
                  </span>
                </div>
              </div>
              <button
                className="btn btn-primary position-absolute top-50 start-50 translate-middle opacity-0"
                style={{ transition: "opacity 0.3s" }}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              &laquo;
            </button>
          </li>

          {[...Array(totalPages)].map((_, i) => (
            <li
              key={i}
              className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            </li>
          ))}

          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              &raquo;
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
