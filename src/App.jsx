import { WalletProvider } from "./context/context.jsx"; // Import WalletProvider
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/Home.jsx";
import Hero from "./pages/learn/Hero.jsx";
import MCQPage from "./pages/learn/MCQPage.jsx";

export default function App() {
  return (
    <WalletProvider>
      {" "}
      {/* Wrap everything inside WalletProvider */}
      <BrowserRouter>
        <div className="relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Hero />} />
            <Route path="/learn/html-css" element={<MCQPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </WalletProvider>
  );
}
