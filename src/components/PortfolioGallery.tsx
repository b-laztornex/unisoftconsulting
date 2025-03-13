import React, { useState, useEffect } from "react";
import "./PortfolioGallery.css";

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
    fetch(process.env.PUBLIC_URL + "/data/portafolio_data.json")
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
    <div className="portfolio-gallery">
      <div className="slider">
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="nav-button prev"
        >
          &lt;
        </button>
        <div className="slider-items">
          {portfolio
            .slice(currentIndex, currentIndex + 3)
            .map((item, index) => (
              <div
                key={index}
                className="portfolio-item"
                onClick={() => openModal(item)}
              >
                <div className="item-image-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="portfolio-image"
                  />
                  <div className="overlay">
                    <div className="portfolio-title">{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <button
          onClick={next}
          disabled={currentIndex + 3 >= portfolio.length}
          className="nav-button next"
        >
          &gt;
        </button>
      </div>

      {modalOpen && selectedItem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              X
            </button>
            <div className="modal-left">
              <h2>{selectedItem.title}</h2>
              <p>{selectedItem.description}</p>
              <div>
                <strong>Technologies:</strong>{" "}
                {selectedItem.technologies.join(", ")}
              </div>
              <div>
                <strong>Sectors:</strong> {selectedItem.sectors.join(", ")}
              </div>
              {selectedItem.github && (
                <div>
                  <a
                    href={selectedItem.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              )}
              {selectedItem.live_demo && (
                <div>
                  <a
                    href={selectedItem.live_demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              )}
            </div>
            <div className="modal-right">
              <div className="tabs">
                <button
                  className={activeTab === "images" ? "active" : ""}
                  onClick={() => setActiveTab("images")}
                >
                  Images
                </button>
                <button
                  className={activeTab === "video" ? "active" : ""}
                  onClick={() => setActiveTab("video")}
                >
                  Video
                </button>
              </div>
              <div className="tab-content">
                {activeTab === "images" && (
                  <div className="images-gallery">
                    {selectedItem.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${selectedItem.title} ${idx}`}
                        className="gallery-thumb"
                        onClick={() => setSelectedImage(img)}
                      />
                    ))}
                    {selectedImage && (
                      <div className="selected-image">
                        <img src={selectedImage} alt="Selected" />
                        <button onClick={() => setSelectedImage(null)}>
                          Close
                        </button>
                      </div>
                    )}
                  </div>
                )}
                {activeTab === "video" && (
                  <div className="video-container">
                    {selectedItem.video.endsWith(".mov") ||
                    selectedItem.video.endsWith(".mp4") ? (
                      <video controls style={{ width: "100%" }}>
                        <source src={selectedItem.video} type="video/mp4" />
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
      )}
    </div>
  );
};

export default PortfolioGallery;
