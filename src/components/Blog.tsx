import React, { useState, useEffect } from "react";

interface BlogItem {
  title: string;
  read_time: number;
  summary: string;
  top_image: string;
  image_preview: string;
  text: string;
  link: string;
  related_videos: string | null;
  related_podcasts: string | null;
}

const Blog: React.FC = () => {
  const [portfolio, setBlog] = useState<BlogItem[]>([]);
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  useEffect(() => {
    fetch("data/blog_data.json")
      .then((response) => response.json())
      .then((data) => {
        setBlog(data.blogs);
      })
      .catch((err) => console.error("Error fetching blogs data", err));
  }, []);

  const handleExpand = (index: number) => {
    setExpandedIndexes((prev) => [...prev, index]);
  };

  const handleCollapse = (index: number) => {
    setExpandedIndexes((prev) => prev.filter((i) => i !== index));
  };

  return (
    <div className="py-12 px-4 relative">
      <h2 className="text-center text-3xl font-bold text-white mb-4">
        Portafolio
      </h2>

      <div className="max-w-6xl mx-auto relative">
        {/* Blog Items Grid */}
        <div className="grid">
          {portfolio.map((item, index) => {
            const expanded = expandedIndexes.includes(index);
            return (
              <div
                key={index}
                className="bg-white bg-opacity-90 p-0 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden mb-6"
              >
                <div
                  className="relative w-full h-48 flex items-end rounded-md"
                  style={{
                    backgroundImage: `url(${item.image_preview})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="w-full bg-black bg-opacity-60 p-2 rounded-b-md">
                    <span className="text-white text-lg font-semibold block text-center">
                      {item.title}
                    </span>
                  </div>
                </div>
                <div
                  className="p-4 transition-all duration-300 ease-in-out"
                  style={
                    expanded
                      ? { maxHeight: "none", overflow: "visible" }
                      : { maxHeight: "120px", overflow: "hidden" }
                  }
                >
                  <p
                    className="text-gray-800 text-base mb-2"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    {item.summary}
                  </p>
                  {expanded && item.text && (
                    <div
                      className="text-gray-700 text-sm mb-2 prose max-w-none"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  )}
                  {!expanded &&
                    (item.summary.length > 80 ||
                      (item.text && item.text.length > 0)) && (
                      <button
                        className="text-blue-900 underline text-sm mt-2"
                        onClick={() => handleExpand(index)}
                      >
                        Read more
                      </button>
                    )}
                  {expanded && (
                    <button
                      className="text-blue-900 underline text-sm mt-2"
                      onClick={() => handleCollapse(index)}
                    >
                      Show less
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
