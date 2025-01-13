import "./App.css";
//BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
//ROUTING
import { BrowserRouter, Routes, Route } from "react-router-dom";
//LAYOUTS
import DefaultLayout from "./layouts/DefaultLayout";
//PAGES
import HomePage from "./pages/HomePage";
import MovieShowPage from "./pages/MovieShowPage/MovieShowPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/movies" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path=":id" element={<MovieShowPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
