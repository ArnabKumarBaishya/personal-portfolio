import React, { useState } from "react";

const images = [
  "https://picsum.photos/400/300?random=1",
  "https://picsum.photos/400/300?random=2",
  "https://picsum.photos/400/300?random=3",
  "https://picsum.photos/400/300?random=4",
  "https://picsum.photos/400/300?random=5",
  "https://picsum.photos/400/300?random=6",
];

function Gallery() {
  return (
    <section className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">Image Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <ZoomableImage key={idx} src={src} />
        ))}
      </div>
    </section>
  );
}

function ZoomableImage({ src }) {
  const [scale, setScale] = useState(1);

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3)); // max 3x zoom
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 1)); // min 1x zoom

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-md group">
      <img
        src={src}
        alt="Gallery item"
        style={{ transform: `scale(${scale})` }}
        className="w-full h-64 object-cover transition-transform duration-300"
      />

      {/* Zoom controls - visible on hover */}
      <div className="absolute inset-0 flex items-end justify-center gap-3 pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={zoomOut}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          ➖
        </button>
        <button
          onClick={zoomIn}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          ➕
        </button>
      </div>
    </div>
  );
}

export default Gallery;
