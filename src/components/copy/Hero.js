import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div
      className="hero-section d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url(/images/myanmar-mohinga.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay">
        <div className="left">
          <div className="big-circle animate-fade-left">
            <img
              // src="/images/Laphet-Thoke.jpg"
              src="/images/tea-leaf-myanmar.jpg"
              alt="Laphet-Thoke"
              className="top-left"
            />
            <img
              src="/images/Shan-Noodles.jpg"
              alt="Shan-Noodles"
              className="top-right"
            />
            <img
              src="/images/coconut-chicken-noodle-soup.jpg"
              alt="Coconut Chicken Noodle Soup"
              className="bottom-center"
            />
          </div>
        </div>
        <div className="d-flex right">
          <h1 className="animate-fade-right">Serving Delicious</h1>
          <h3 className="animate-fade">Burmese & Asian Foods</h3>
          <p className="animate-fade">
            Serving authentic flavors from Japan and Asia. Fresh ingredients,
            carefully prepared dishes, and fast delivery right to your door!
          </p>
          <a href="#" className="cta animate-fade-left">
            Enjoy Our Delicious Meals
          </a>
        </div>
      </div>
      {/* Scroll Down Icon */}
      <div class="scroll-down text-center">
        <a href="#bestseller" class="text-black">
          <i class="bi bi-chevron-down"></i>
        </a>
      </div>
    </div>
  );
}
