import { useState } from "react";
import "./App.css";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import InfiniteImageScroller from "./components/InfiniteImageScroller";
import PortfolioGallery from "./components/PortfolioGallery";
import Service from "./components/Service";
import StickyNavBar from "./components/StickyNavBar";
import ThreeBackground from "./components/ThreeBackground";

function App() {
  const [activeHomePage, setActiveHomePage] = useState(true);

  return (
    <div>
      <StickyNavBar
        setActiveHomePage={setActiveHomePage}
        activeHomePage={activeHomePage}
      />

      <section className="relative h-screen bg-[url('/images/imac_desktop.jpg')]  bg-cover bg-center h-screen w-fullw-full overflow-hidden">
        {/* Three.js animated background */}
        <ThreeBackground />

        {/* Optional overlay for color tint and opacity */}
        <div className="absolute inset-0 bg-[#433290] opacity-30"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold bg-black/50 px-4 py-2 rounded">
            Marco Casanova Software Developer
          </h1>
          <h3 className="text-white text-2xl font-bold bg-black/50 px-4 py-2 rounded mt-4">
            Getting things done!
          </h3>
        </div>
      </section>

      {activeHomePage == true ? (
        <div>
          <section
            id="services"
            className="w-full flex items-center justify-center  bg-blue-900 opacity-60"
          >
            <Service />
          </section>
          <section
            id="portafolio"
            className="w-full flex items-center justify-center bg-[#433290]"
          >
            <PortfolioGallery />
          </section>
          <section
            id="clients"
            className="w-full flex items-center justify-center  bg-white-900"
          >
            <InfiniteImageScroller />
          </section>
          <section
            id="contact"
            className="w-full flex items-center justify-center  bg-purple-900"
          >
            <Contact />
          </section>
        </div>
      ) : (
        <div>
          <button onClick={() => setActiveHomePage(!activeHomePage)}>
            SET BOARD
          </button>
          <Blog></Blog>
        </div>
      )}
    </div>
  );
}

export default App;
