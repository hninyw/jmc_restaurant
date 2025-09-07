import React, { useState, useEffect } from "react";
import "./HeroSlider.css";

export default function Reservation() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  useEffect(() => {
    const els = [leftRef.current, rightRef.current].filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.2 } // 20% visible triggers animation
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div className="reservation-section position-relative" id="hero">
        <div style={{
            backgroundImage: `url(/images/myanmar-mohinga.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay d-flex flex-column align-items-center justify-content-center text-center text-white">
            {/* <h1 className="animate-fade">{slides[current].title}</h1>
            <h3 className="animate-fade">{slides[current].subtitle}</h3>
            <p className="animate-fade">{slides[current].desc}</p>
            <a href="#menu" className="btn btn-warning mt-3 animate-fade">
              {slides[current].cta}
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
