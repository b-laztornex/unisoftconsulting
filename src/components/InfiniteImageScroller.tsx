import React, { useEffect, useRef, useState } from "react";

const images = [
  "clients/dreamnest.webp",
  "clients/domtom.webp",
  "clients/prosieben.webp",
  "clients/webcreek.png",
  "clients/creative.png",
  "clients/dreamnest.webp",
  "clients/domtom.webp",
  "clients/prosieben.webp",
  "clients/webcreek.png",
  "clients/creative.png",
  "clients/dreamnest.webp",
  "clients/dreamnest.webp",
  "clients/domtom.webp",
  "clients/prosieben.webp",
  "clients/webcreek.png",
  "clients/dreamnest.webp",
  "clients/dreamnest.webp",
  "clients/dreamnest.webp",
  "clients/dreamnest.webp",
  "clients/dreamnest.webp",
  "clients/dreamnest.webp",
];

const InfiniteImageScroller = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20); // Slow continuous scroll

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden p-4 flex items-center justify-center">
      <div
        ref={scrollRef}
        className="flex space-x-4 w-full overflow-x-scroll scrollbar-hide"
        style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
      >
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[300px] h-[200px] rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={img}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteImageScroller;
