import React from "react";
import "./ParallaxSection.css";

export default function ParallaxSection() {
  return (
    <div>
      {/* Background Image */}
      <div className="parallax-bg"
      style={{
            backgroundImage: "url(/images/myanmar-mohinga.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></div>

      {/* Section 1 */}
      <section className="content-section">
        <h2>Our Fans' Favorite</h2>
        <p>
          Pasta Carbonara - The Ultimate Comfort. I'm a paragraph. Add your own
          text here to tell your story.
        </p>
      </section>

      {/* Section 2 */}
      <section className="content-section dark">
        <h2>Family Bundle</h2>
        <p>
          Gather around the table with our special family bundle. Write your own
          story here.
        </p>
      </section>

      {/* Section 3 */}
      <section className="content-section">
        <h2>Reserve a Table</h2>
        <p>
          Make your reservation easily and enjoy the best dishes in a warm
          atmosphere.
        </p>
      </section>
    </div>
  );
}
