import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans from "./Pages/Vans/Vans";
import "./styles/vanLife.css";
import Footer from "./components/Footer";
import "./server";
import ProductDetails from "./Pages/Vans/ProductDetails";
import Layout from "./components/Layout";
import Dashboard from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import LayoutHost from "./components/LayoutHost";
import HostVans from "./Pages/Host/HostVans";
import HostVanDetails from "./Pages/Host/HostVanDetails";
import VanDetails from "./components/VanDetails";
import VanPricing from "./components/VanPricing";
import VanPhotos from "./components/VanPhotos";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          {/* Example One: this code doesn't work becuase not found outlet */}
          {/* <Route path="vans" element={<Vans />}>
            <Route path=":vanId" element={<ProductDetails />} />
          </Route> */}

          {/* Example Two: this code will work good without outlet */}
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":vanId" element={<ProductDetails />} />
          </Route>

          <Route path="host" element={<LayoutHost />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="reviews" element={<Reviews />} />

            <Route path="vans/:vanId" element={<HostVanDetails />}>
              <Route index element={<VanDetails />} />
              <Route path="pricing" element={<VanPricing />} />
              <Route path="photos" element={<VanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
