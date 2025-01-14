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
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/movies" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path=":id" element={<MovieShowPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
