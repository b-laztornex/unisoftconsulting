import "./App.css";
import Contact from "./components/Contact";
import InfiniteImageScroller from "./components/InfiniteImageScroller";
import PortfolioGallery from "./components/PortfolioGallery";
import Service from "./components/Service";
import StickyNavBar from "./components/StickyNavBar";

function App() {
  return (
    <div>
      <StickyNavBar />
      <section className="relative bg-[url('/images/imac_desktop.jpg')] bg-cover bg-center h-screen w-full">
        <div className="absolute inset-0 bg-[#433290] opacity-70"></div>
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold"></h1>
        </div>
      </section>

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

      <section className="w-full flex items-center justify-center bg-gray-200">
        <h2 className="text-3xl">Section 3</h2>
      </section>
    </div>
  );
}

export default App;
