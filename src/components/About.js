import React, { useEffect, useRef } from "react";
import "./About.css";

export default function About() {
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
            // Remove class when section leaves viewport
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
    <section className="about-section" id="about">
      <div className="main-container">
        <div className="row align-items-start">
          <div ref={leftRef} className="col-md-6 gap-3 d-flex reveal-left">
            <div
              className="img flex-fill"
              style={{ backgroundImage: "url(/images/d1.jpg)" }}
            />
            <div
              className="img flex-fill mgt-30px"
              style={{ backgroundImage: "url(/images/d2.jpg)" }}
            />
          </div>
          <div
            ref={rightRef}
            className="col-md-6 wrap-about reveal-right text-start p-3"
          >
            <div className="heading-section mb-3 text-center">
              <h1 className="mb-0">About JMC Restaurant</h1>
            </div>
            <p>
              Welcome to <strong>JMC</strong>, where the flavors of Asia meet in
              one place. From the delicate art of <em>Japanese sushi</em>, the
              bold spices of <em>Thai cuisine</em>, the warm heart of
              <em> Myanmar traditional dishes</em>, to the rich heritage of
              <em> Chinese classics</em> – we bring you a culinary journey
              across Asia.
            </p>
            <p className="time mb-0">
              <span>
                Mon - Fri <strong>8 AM - 11 PM</strong>
              </span>
              <br />
              <span>
                <a href="tel:+19781234567">+ 1-978-123-4567</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
