import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./core/core.css";
import Header from "./components/header/Header";

import MainPage from "./page/main/MainPage";
import FooterPage from "./components/footer/FooterPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <FooterPage />
    </BrowserRouter>
  );
}

export default App;
