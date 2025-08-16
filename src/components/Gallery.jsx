import { useState, useEffect, useCallback } from "react";
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

// Step 2: Create an enhanced array with captions and metadata
const galleryImages = [
  { 
    id: "a", 
    src: img1, 
    area: "a", 
    title: "Innovation Workshop",
    description: "Students collaborating on cutting-edge tech solutions during our flagship innovation workshop.",
    category: "Workshop"
  },
  { 
    id: "b", 
    src: img2, 
    area: "b", 
    title: "Code Competition",
    description: "Intense coding sessions during our annual programming championship.",
    category: "Competition"
  },
  { 
    id: "c", 
    src: img3, 
    area: "c", 
    title: "Team Building",
    description: "Building strong bonds and friendships beyond the realm of technology.",
    category: "Community"
  },
  { 
    id: "d", 
    src: img4, 
    area: "d", 
    title: "Hackathon Glory",
    description: "48 hours of non-stop coding, creativity, and groundbreaking solutions.",
    category: "Hackathon"
  },
  { 
    id: "e", 
    src: img5, 
    area: "e", 
    title: "Tech Talks",
    description: "Industry experts sharing insights and inspiring the next generation of developers.",
    category: "Learning"
  },
  { 
    id: "f", 
    src: img6, 
    area: "f", 
    title: "Project Showcase",
    description: "Proud moments of presenting innovative projects to industry mentors.",
    category: "Achievement"
  },
  { 
    id: "g", 
    src: img7, 
    area: "g", 
    title: "Community Impact",
    description: "Using technology to solve real-world problems and make a difference.",
    category: "Impact"
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    // Simulate loading effect
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (image, index) => {
    setSelectedImage({ ...image, index });
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = useCallback((direction) => {
    if (!selectedImage) return;
    
    const currentIndex = selectedImage.index;
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage({ ...galleryImages[newIndex], index: newIndex });
  }, [selectedImage]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, navigateImage]);

  return (
    <section className="photo-gallery">
      <h1 className="gallery-Header">Glimpses of Our Journey</h1>
      <div className="gallery-subtitle">
        Click any image to explore our memories in detail
      </div>
      
      <div className={`gallery-grid ${isLoading ? 'loading' : 'loaded'}`}>
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className={`item ${hoveredItem === image.id ? 'hovered' : ''}`}
            style={{
              gridArea: image.area,
              backgroundImage: `url(${image.src})`,
            }}
            onClick={() => openLightbox(image, index)}
            onMouseEnter={() => setHoveredItem(image.id)}
            onMouseLeave={() => setHoveredItem(null)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && openLightbox(image, index)}
          >
            <div className="item-overlay">
              <div className="item-content">
                <span className="item-category">{image.category}</span>
                <h3 className="item-title">{image.title}</h3>
                <p className="item-description">{image.description}</p>
                <div className="click-indicator">
                  <span>Click to expand</span>
                  <div className="expand-icon">⤢</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close gallery">
              ✕
            </button>
            
            <button 
              className="lightbox-nav lightbox-prev" 
              onClick={() => navigateImage('prev')}
              aria-label="Previous image"
            >
              ‹
            </button>
            
            <div className="lightbox-content">
              <div className="lightbox-image-container">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title}
                  className="lightbox-image"
                />
              </div>
              
              <div className="lightbox-info">
                <div className="lightbox-category">{selectedImage.category}</div>
                <h2 className="lightbox-title">{selectedImage.title}</h2>
                <p className="lightbox-description">{selectedImage.description}</p>
                <div className="lightbox-counter">
                  {selectedImage.index + 1} of {galleryImages.length}
                </div>
              </div>
            </div>
            
            <button 
              className="lightbox-nav lightbox-next" 
              onClick={() => navigateImage('next')}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;