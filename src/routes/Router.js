import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import FilmsDetails from "../pages/FilmsDetails";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/filmes/:id/detalhes" element={<FilmsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
