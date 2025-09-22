import React, { useState } from "react";

const Gallery = () => {
  const images = [
    "https://picsum.photos/400/300?random=1",
    "https://picsum.photos/400/300?random=2",
    "https://picsum.photos/400/300?random=3",
    "https://picsum.photos/400/300?random=4",
    "https://picsum.photos/400/300?random=5",
    "https://picsum.photos/400/300?random=6",
  ];

  // keep track of which image is tapped (for mobile zoom)
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTap = (index) => {
    // toggle zoom on tap
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl shadow-lg"
              onClick={() => handleTap(index)} // for mobile
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className={`w-full h-64 object-cover transform transition-transform duration-500 ease-in-out 
                ${activeIndex === index ? "scale-125" : "group-hover:scale-125"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
