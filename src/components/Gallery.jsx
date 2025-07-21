import React from "react";
import "./Gallery.css";

// Step 1: Import all your images directly into the component.
// Make sure the path from this file to your images folder is correct.
import img1 from "../assets/images/img1.png"; 
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";

// Step 2: Create an array of the imported images.
const galleryImages = [
  { id: "a", src: img1, area: "a" },
  { id: "b", src: img2, area: "b" },
  { id: "c", src: img3, area: "c" },
  { id: "d", src: img4, area: "d" },
  { id: "e", src: img5, area: "e" },
  { id: "f", src: img6, area: "f" },
  { id: "g", src: img7, area: "g" },
];

const Gallery = () => {
  return (
    <section className="photo-gallery">
      <h1 className="gallery-Header">Glimpses of Our Journey</h1>
      <div className="gallery-grid">
        {/* Step 3: Map over the array to render each item */}
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="item"
            style={{
              // The grid-area is now applied directly for desktop view
              gridArea: image.area,
              // The background image is now applied safely via JS
              backgroundImage: `url(${image.src})`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;