import "./App.css";
import PortfolioGallery from "./components/PortfolioGallery";
import StickyNavBar from "./components/StickyNavBar";

function App() {
  return (
    <div>
      <section className="relative bg-[url('/images/imac_desktop.jpg')] bg-cover bg-center h-screen w-full">
        <div className="absolute inset-0 bg-[#433290] opacity-70"></div>
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold"></h1>
        </div>
      </section>
      <StickyNavBar />

      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl text-[#433290]">
        Portafolio
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        These are the services Ioffer
      </h3>

      <section
        id="portafolio"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <PortfolioGallery />
      </section>

      <section className="min-h-screen flex items-center justify-center bg-gray-200">
        <h2 className="text-3xl">Section 3</h2>
      </section>
    </div>
  );
}

export default App;
