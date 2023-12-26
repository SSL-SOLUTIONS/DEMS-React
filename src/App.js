import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import SEO from "./Pages/Services/SEO/SEO";
import PPC from "./Pages/Services/PPC/PPC";
import Repute from "./Pages/Services/Repute/Repute";
import SociaMedia from "./Pages/Services/SociaMedia/SociaMedia";
import WebDev from "./Pages/Services/WebDev/WebDev";
import MarketAutomation from "./Pages/Services/MarketAutomation/MarketAutomation";
import LocalSeoIndustry from "./Pages/Industries/LocalSeoIndustry/LocalSeoIndustry";
import PpcIndustry from "./Pages/Industries/PpcIndustry/PpcIndustry";
import SeoIndustry from "./Pages/Industries/SeoIndustry/SeoIndustry";
import SocialIndustry from "./Pages/Industries/SocialIndustry/SocialIndustry";
import WebDevIndustry from "./Pages/Industries/WebDevIndustry/WebDevIndustry";
import WebDesignIndustry from "./Pages/Industries/WebDesignIndustry/WebDesignIndustry";
import Franchise from "./Pages/Industries/Franchise/Franchise";
import Ecommerce from "./Pages/Industries/Ecommerce/Ecommerce";
import AssistLiving from "./Pages/Industries/AssistLiving/AssistLiving";
import Crypto from "./Pages/Industries/Crypto/Crypto";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import LocalSeo from "./Pages/Services/LocalSeo/LocalSeo";
import EnterpriseSeo from "./Pages/Services/EnterpriseSeo/EnterpriseSeo";
import LinkBuilding from "./Pages/Services/LinkBuilding/LinkBuilding";
import GooglePPC from "./Pages/Services/GooglePPC/GooglePPC";
import YtMarketing from "./Pages/Services/YtMarketing/YtMarketing";
import FbMarketing from "./Pages/Services/FbMarketing/FbMarketing";
import RepoMangment from "./Pages/Services/RepoMangment/RepoMangment";

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
        <Route path="/about-us" element={<About />} />
        <Route
          path="/luxury-communities/seo-services"
          element={<SeoIndustry />}
        />
        <Route path="/local-seo-services" element={<LocalSeo />} />
        <Route path="/enterprise-seo-services" element={<EnterpriseSeo />} />
        <Route path="/link-building-services" element={<LinkBuilding />} />
        <Route path="/google-ads-management-services" element={<GooglePPC />} />
        <Route path="/youtube-advertising-services" element={<YtMarketing />} />
        <Route
          path="/facebook-advertising-services"
          element={<FbMarketing />}
        />
        <Route
          path="/reputation-management-services"
          element={<RepoMangment />}
        />

        {/* Industries */}
        <Route
          path="/luxury-communities/seo-services"
          element={<SeoIndustry />}
        />
        <Route
          path="/luxury-communities/local-seo"
          element={<LocalSeoIndustry />}
        />
        <Route
          path="/luxury-communities/ppc-services"
          element={<PpcIndustry />}
        />
        <Route
          path="/luxury-communities/social-media"
          element={<SocialIndustry />}
        />
        <Route
          path="/luxury-communities/web-development"
          element={<WebDevIndustry />}
        />
        <Route
          path="/luxury-communities/web-design"
          element={<WebDesignIndustry />}
        />
        <Route path="/Franchise-industry" element={<Franchise />} />
        <Route path="/E-commerce-industry" element={<Ecommerce />} />
        <Route path="/Crypto-industry" element={<Crypto />} />
        <Route path="/Assisted-Living-industry" element={<AssistLiving />} />

        {/* Contact */}
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
