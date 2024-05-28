import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans from "./Pages/Vans/Vans";
import "./styles/vanLife.css";
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
import NotFoundPage from "./Pages/NotFoundPage";
import {
  getHostVanById,
  getHostVans,
  getVanById,
  getVans,
  loginAction,
  loginLoader,
} from "./Apis";
import Error from "./components/Error";
import Login from "./Pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        // بقوله اول ما الصفحه تحمل خد من ال يو ار ال بتاع الصفحه القيمه بتاعت الرساله وفيدتها اني بعرض بيها رساله ف حاله عدم تسجيل دخول المستخدم
        loader={loginLoader}
        action={loginAction}
      />

      {/* Example One: this code doesn't work becuase not found outlet */}
      {/* <Route path="vans" element={<Vans />}>
            <Route path=":vanId" element={<ProductDetails />} />
          </Route> */}

      {/* Example Two: this code will work good without outlet */}
      <Route path="vans" errorElement={<Error />}>
        <Route index element={<Vans />} loader={getVans} />
        <Route path=":vanId" element={<ProductDetails />} loader={getVanById} />
      </Route>

      <Route path="host" element={<LayoutHost />}>
        <Route
          index
          element={<Dashboard />}
          loader={getHostVans}
          errorElement={<Error />}
        />
        <Route path="income" element={<Income />} />

        <Route
          path="vans"
          element={<HostVans />}
          loader={getHostVans}
          errorElement={<Error />}
        />
        <Route
          path="vans/:vanId"
          loader={getHostVanById}
          element={<HostVanDetails />}
          errorElement={<Error />}
        >
          <Route index element={<VanDetails />} />
          <Route path="pricing" element={<VanPricing />} />
          <Route path="photos" element={<VanPhotos />} />
        </Route>

        <Route path="reviews" element={<Reviews />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
