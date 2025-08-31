import React from "react";

const dishes = [
  { id: 1, name: "Mohinga", price: "¥1100", img: "/images/myanmar-mohinga.jpg" },
  { id: 2, name: "Sushi", price: "$15", img: "https://via.placeholder.com/200" },
  { id: 3, name: "Tempura", price: "$10", img: "https://via.placeholder.com/200" },
];

export default function Menu() {
  return (
    <div id="menu" className="container my-5">
      <h2 className="text-center mb-4">Our Menu</h2>
      <div className="row">
        {dishes.map((dish) => (
          <div key={dish.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={dish.img} className="card-img-top" alt={dish.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{dish.name}</h5>
                <p className="card-text">{dish.price}</p>
                <button className="btn btn-danger">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
