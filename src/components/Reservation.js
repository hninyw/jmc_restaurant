import React, { useEffect, useRef } from "react";
import "./Reservation.css";

export default function Reservation() {
  const orderRef = useRef(null);
  const reserveRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (orderRef.current) observer.observe(orderRef.current);
    if (reserveRef.current) observer.observe(reserveRef.current);

    return () => {
      if (orderRef.current) observer.unobserve(orderRef.current);
      if (reserveRef.current) observer.unobserve(reserveRef.current);
    };
  }, []);

  return (
    <section
      className="reservation-section"
      id="reservation"
      style={{
        backgroundImage: "url(/images/kyay-oo.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="main-container reservation-grid">
        {/* Left: Order Online */}
        <div className="reservation-form book-table" ref={reserveRef}>
          <h2>Reserve Table</h2>
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
            />
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              required
            />
            <input type="date" className="form-control" required />
            <input type="time" className="form-control" required />
            <select className="form-control" required>
              <option value="">Guests</option>
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4+ People</option>
            </select>
            <button type="submit" className="btn btn-warning">
              Book Now
            </button>
          </form>
        </div>

        {/* Right: Reserve Table */}
        <div className="reservation-form online-order" ref={orderRef}>
          <h2>Order Online</h2>
          <h5>It's Fast and Easy</h5>
          <form>
            <button type="submit" className="btn btn-warning">
              Order Now →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
