import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import SEO from "./Pages/Services/SEO/SEO";
import PPC from "./Pages/Services/PPC/PPC";
import Repute from "./Pages/Services/Repute/Repute";
import SociaMedia from "./Pages/Services/SociaMedia/SociaMedia";
import WebDev from "./Pages/Services/WebDev/WebDev";
import MarketAutomation from "./Pages/Services/MarketAutomation/MarketAutomation";
import Industries from "./Pages/Industries/Industries";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* home */}
        <Route path="/" element={<Home />} />

        {/* services */}
        <Route path="/seo-services" element={<SEO />} />
        <Route path="/ppc-management-services" element={<PPC />} />
        <Route path="/reputation-management-services" element={<Repute />} />
        <Route
          path="/social-media-marketing-services"
          element={<SociaMedia />}
        />
        <Route path="/web-development-company" element={<WebDev />} />
        <Route
          path="/marketing-automation-services"
          element={<MarketAutomation />}
        />
        <Route
          path="/about-us"
          element={<About/>}
        />
        <Route path="/industries" element={<Industries />} />
      </Routes>
    </div>
  );
}

export default App;
