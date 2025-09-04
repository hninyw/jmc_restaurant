import React, { useState, useEffect } from "react";
import "./HeroSlider.css";

const slides = [
  {
    id: 1,
    title: "Comfort in a Bowl",
    subtitle: "Coconut Chicken Noodle Soup",
    desc: "Warm, creamy, and packed with flavor to soothe your soul.",
    image: "/images/myanmar-mohinga.jpg",
    cta: "Enjoy Coconut Soup",
  },
  {
    id: 2,
    title: "Fresh & Healthy",
    subtitle: "Tea Leaf Salad",
    desc: "A crunchy and zesty delight from Myanmar.",
    image: "/images/myanmar-mohinga.jpg",
    cta: "Order Tea Salad",
  },
  {
    id: 3,
    title: "Best Seller",
    subtitle: "Shan Noodles",
    desc: "Authentic Shan State noodles full of tradition.",
    image: "/images/myanmar-mohinga.jpg",
    cta: "Taste Shan Noodles",
  },
];

export default function HeroSlider() {
  const [hover, setHover] = useState(false);
  const [showArrows, setShowArrows] = useState(false);
  useEffect(() => {
    if (hover) {
      setShowArrows(true);
    } else {
      const timeout = setTimeout(() => setShowArrows(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [hover]);

  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="hero-section position-relative" id="hero">
      <div
        className="hero-slide"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(true)}
        style={{
          backgroundImage: `url(${slides[current].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay d-flex flex-column align-items-center justify-content-center text-center text-white">
          <h1 className="animate-fade">{slides[current].title}</h1>
          <h3 className="animate-fade">{slides[current].subtitle}</h3>
          <p className="animate-fade">{slides[current].desc}</p>
          <a href="#menu" className="btn btn-warning mt-3 animate-fade">
            {slides[current].cta}
          </a>
        </div>

        {/* Arrows */}
        {showArrows && (
          <>
            <button
              className={`arrow left ${
                hover ? "fade-in-left" : "fade-out-left"
              }`}
              onClick={prevSlide}
            >
              ❮
            </button>
            <button
              className={`arrow right ${
                hover ? "fade-in-right" : "fade-out-right"
              }`}
              onClick={nextSlide}
            >
              ❯
            </button>
          </>
        )}

        {/* Dots */}
        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
