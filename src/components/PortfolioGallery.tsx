import React, { useState, useEffect } from "react";

interface PortfolioItem {
  title: string;
  description: string;
  technologies: string[];
  sectors: string[];
  image: string;
  images: string[];
  video: string;
  github: string | null;
  live_demo: string | null;
}

const PortfolioGallery: React.FC = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [activeTab, setActiveTab] = useState<"images" | "video">("images");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetch("data/portafolio_data.json")
      .then((response) => response.json())
      .then((data) => {
        setPortfolio(data.portfolio);
      })
      .catch((err) => console.error("Error fetching portfolio data", err));
  }, []);

  const next = () => {
    if (currentIndex + 3 < portfolio.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const prev = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  const openModal = (item: PortfolioItem) => {
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
      <h2 className="text-center text-3xl font-bold text-black mb-4">
        Portafolio
      </h2>
      <p className="text-center text-lg text-black mb-8">
        With over 10 years of experience in web development, I specialize in
        building scalable, high-performance applications.
      </p>
      <div className="max-w-6xl mx-auto relative">
        {/* Left Arrow placed outside the container */}
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white rounded-full p-3 disabled:opacity-50 z-10 focus:outline-none"
        >
          &lt;
        </button>
        {/* Right Arrow placed outside the container */}
        <button
          onClick={next}
          disabled={currentIndex + 3 >= portfolio.length}
          className="absolute -right-10 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white rounded-full p-3 disabled:opacity-50 z-10 focus:outline-none"
        >
          &gt;
        </button>
        {/* Portfolio Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolio
            .slice(currentIndex, currentIndex + 3)
            .map((item, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition duration-300"
                onClick={() => openModal(item)}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                    <span className="text-white text-lg font-semibold">
                      {item.title}
                    </span>
                  </div>
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
                <p className="mb-4 text-gray-700">{selectedItem.description}</p>
                <div className="mb-2">
                  <strong>Technologies:</strong>{" "}
                  <span className="text-gray-600">
                    {selectedItem.technologies.join(", ")}
                  </span>
                </div>
                <div className="mb-4">
                  <strong>Sectors:</strong>{" "}
                  <span className="text-gray-600">
                    {selectedItem.sectors.join(", ")}
                  </span>
                </div>
                {selectedItem.github && (
                  <div className="mb-2">
                    <a
                      href={selectedItem.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-900 underline"
                    >
                      GitHub
                    </a>
                  </div>
                )}
                {selectedItem.live_demo && (
                  <div className="mb-2">
                    <a
                      href={selectedItem.live_demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-900 underline"
                    >
                      Live Demo
                    </a>
                  </div>
                )}
              </div>
              {/* Right side: tabs for images/video */}
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
                        {selectedItem.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={`portafolio/${img}`}
                            alt={`${selectedItem.title} ${idx}`}
                            className="w-full h-24 object-cover rounded cursor-pointer"
                            onClick={() => setSelectedImage(img)}
                          />
                        ))}
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
                    {activeTab === "video" && (
                      <div className="video-container">
                        {selectedItem.video.endsWith(".mov") ||
                        selectedItem.video.endsWith(".mp4") ? (
                          <video controls className="w-full">
                            <source
                              src={`videos/${selectedItem.video}`}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <iframe
                            width="100%"
                            height="315"
                            src={selectedItem.video}
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

export default PortfolioGallery;
