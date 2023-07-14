import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import About from "./routes/About";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";
import ProductDetail from "./routes/ProductDetail";
import Login from "./routes/Login";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/shop/:name",
      element: <ProductDetail />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
