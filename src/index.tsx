import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import './App.scss'
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home></Home>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);