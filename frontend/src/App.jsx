import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Registration from "./pages/registration";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/login";
import NotLoggedinUser from "./privateRouter/NotLoggedinUser";
import LoggedinUser from "./privateRouter/LoggedinUser";
import RootLayout from "./components/RootLayout";
import "swiper/css";
import CreatePostPopup from "./components/HomeComponents/PostHome/createPostPopup";
import ActivatePage from "./pages/Home/ActivatePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<LoggedinUser />}>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/activate/:token" element={<ActivatePage />} />
        </Route>
      </Route>
      <Route element={<NotLoggedinUser />}>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <CreatePostPopup />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
