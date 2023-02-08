import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./core/core.css";
import Header from "./components/header/Header";
import MainPage from "./page/main/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
