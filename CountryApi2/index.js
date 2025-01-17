import { createRoot } from "react-dom/client";
import App from "./App.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.js";
import Error from "./components/Error.js";
import CountryDetails from "./components/CountryDetails.js";

const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <h1>contacct</h1>,
      },
      {
        path: "/:country",
        element: <CountryDetails />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
