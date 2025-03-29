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
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<BlogItem | null>(null);
  const [activeTab, setActiveTab] = useState<"images" | "video">("images");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetch("data/blog_data.json")
      .then((response) => response.json())
      .then((data) => {
        setBlog(data.blogs);
      })
      .catch((err) => console.error("Error fetching blogs data", err));
  }, []);

  const openModal = (item: BlogItem) => {
    setSelectedItem(item);
    setActiveTab("images");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
    setSelectedImage(null);
  };

  return (
    <div className="py-12 px-4 relative">
      <h2 className="text-center text-3xl font-bold text-white mb-4">
        Portafolio
      </h2>
      <p className="text-center text-lg text-gray-300 mb-8">
        With over 10 years of experience in web development, I specialize in
        building scalable, high-performance applications.
      </p>
      <div className="max-w-6xl mx-auto relative">
        {/* Portfolio Items Grid */}
        <div className="grid">
          {portfolio.map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition duration-300"
              onClick={() => openModal(item)}
            >
              <div className="relative">
                <img
                  src={item.image_preview}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={closeModal}
            >
              X
            </button>
            <div className="md:flex">
              {/* Left side: details */}
              <div className="md:w-1/2 p-4">
                <h2 className="text-2xl font-bold mb-4">
                  {selectedItem.title}
                </h2>
                <p className="mb-4 text-gray-700">{selectedItem.summary}</p>
                <div className="mb-2">
                  <strong>Technologies:</strong>{" "}
                  <span className="text-gray-600">{selectedItem.text}</span>
                </div>
              </div>
              <div className="md:w-1/2 p-4">
                <div className="mb-4">
                  <div className="flex space-x-4 border-b mb-2">
                    <button
                      className={`pb-2 ${
                        activeTab === "images"
                          ? "border-b-2 border-blue-900 text-blue-900"
                          : "text-gray-600"
                      } focus:outline-none`}
                      onClick={() => setActiveTab("images")}
                    >
                      Images
                    </button>
                    <button
                      className={`pb-2 ${
                        activeTab === "video"
                          ? "border-b-2 border-blue-900 text-blue-900"
                          : "text-gray-600"
                      } focus:outline-none`}
                      onClick={() => setActiveTab("video")}
                    >
                      Video
                    </button>
                  </div>
                  <div>
                    {activeTab === "images" && (
                      <div className="grid grid-cols-3 gap-2">
                        {selectedImage && (
                          <div className="col-span-3 mt-4">
                            <div className="relative">
                              <img
                                src={`portafolio/${selectedImage}`}
                                alt="Selected"
                                className="w-full object-cover rounded"
                              />
                              <button
                                className="absolute top-2 right-2 bg-blue-900 text-white rounded-full p-1 focus:outline-none"
                                onClick={() => setSelectedImage(null)}
                              >
                                X
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    {activeTab === "video" && selectedItem.related_videos! && (
                      <div className="video-container">
                        {selectedItem.related_videos.endsWith(".mov") ||
                        selectedItem.related_videos.endsWith(".mp4") ? (
                          <video controls className="w-full">
                            <source
                              src={`videos/${selectedItem.related_videos}`}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <iframe
                            width="100%"
                            height="315"
                            src={selectedItem.related_videos!}
                            title={selectedItem.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
