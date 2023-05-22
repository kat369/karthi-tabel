import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tabel from "./Tabel";

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/tabel/:year/:issue" element={<Tabel/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
