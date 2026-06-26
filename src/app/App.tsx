import { BrowserRouter, Routes, Route } from "react-router-dom";
import DHomepage from "../imports/DHomepage";
import DMovingPage from "../imports/DMovingPage";
import DStoragePage from "../imports/DStoragePage";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<DHomepage />} />
        <Route path="/moving" element={<DMovingPage />} />
        <Route path="/storage" element={<DStoragePage />} />
      </Routes>
    </BrowserRouter>
  );
}
