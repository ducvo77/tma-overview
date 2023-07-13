import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import About from "./routes/About";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";
import ProductDetail from "./routes/ProductDetail";
import Login from "./routes/Login";
// Import FirebaseAuth and firebase.
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useEffect, useState } from "react";

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
};
firebase.initializeApp(config);

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

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });

    return () => unregisterAuthObserver();
  }, []);

  useEffect(() => {
    if (isSignedIn) {
      console.log("App is logged");
      const currentUser = firebase.auth().currentUser;
      console.log(currentUser);
    }
  }, [isSignedIn]);

  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
