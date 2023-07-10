import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((publicRoute, idx) => {
            const Page = publicRoute.component;
            return (
              <Route key={idx} path={publicRoute.path} element={<Page />} />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
