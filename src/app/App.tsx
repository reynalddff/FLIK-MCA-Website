import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import LandingPage from "../imports/LandingPage";
import TentangFlik from "../imports/TentangFlik";
import MerchantKami from "../imports/MerchantKami";
import FormsPage from "../app/pages/FormsPage";
import MerchantDetailPage from "../app/pages/MerchantDetailPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageWithNav />} />
        <Route
          path="/tentang-flik"
          element={<TentangFlikWithNav />}
        />
        <Route
          path="/merchant-kami"
          element={<MerchantKamiWithNav />}
        />
        <Route path="/merchant/:slug" element={<MerchantDetailPage />} />
        <Route path="/forms" element={<FormsPage />} />
      </Routes>
    </Router>
  );
}

// Wrapper components to add navigation functionality
function LandingPageWithNav() {
  const navigate = useNavigate();
  return <LandingPageWithNavigation navigate={navigate} />;
}

function TentangFlikWithNav() {
  const navigate = useNavigate();
  return <TentangFlikWithNavigation navigate={navigate} />;
}

function MerchantKamiWithNav() {
  const navigate = useNavigate();
  return <MerchantKamiWithNavigation navigate={navigate} />;
}

// Landing Page with navigation handlers
function LandingPageWithNavigation({
  navigate,
}: {
  navigate: (path: string) => void;
}) {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-start relative size-full"
      data-name="Landing Page"
      onClick={(e) => {
        const target = e.target as HTMLElement;

        // Navigate from navbar links
        if (
          target.closest('[data-name="Nav"]') &&
          target.textContent?.includes("Cerita Merchant")
        ) {
          e.preventDefault();
          navigate("/merchant-kami");
        } else if (
          target.closest('[data-name="Nav"]') &&
          target.textContent?.includes("Tentang FLIK")
        ) {
          e.preventDefault();
          navigate("/tentang-flik");
        }
        // White button with border (Tentang FLIK button in body)
        else if (
          target.closest('[data-name="Button"]') &&
          target.textContent?.includes("Tentang FLIK")
        ) {
          e.preventDefault();
          navigate("/tentang-flik");
        }
        // Logo click
        else if (target.closest('[data-name="Logo"]')) {
          e.preventDefault();
          navigate("/");
        }
        // card purple on landing page
        else if (target.closest('[data-name="Card-Purple"]')) {
          e.preventDefault();
          navigate("/merchant-kami");
        }
      }}
    >
      <LandingPage />
    </div>
  );
}

// TentangFlik with navigation handlers
function TentangFlikWithNavigation({
  navigate,
}: {
  navigate: (path: string) => void;
}) {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-start relative size-full"
      data-name="Tentang FLIK"
      onClick={(e) => {
        const target = e.target as HTMLElement;

        // Navigate from navbar links only
        if (
          target.closest('[data-name="Nav"]') &&
          target.textContent?.includes("Cerita Merchant")
        ) {
          e.preventDefault();
          navigate("/merchant-kami");
        }
        // Logo click
        else if (target.closest('[data-name="Logo"]')) {
          e.preventDefault();
          navigate("/");
        }
      }}
    >
      <TentangFlik />
    </div>
  );
}

// MerchantKami with navigation handlers
function MerchantKamiWithNavigation({
  navigate,
}: {
  navigate: (path: string) => void;
}) {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-start relative size-full"
      data-name="Cerita Merchant"
      onClick={(e) => {
        const target = e.target as HTMLElement;

        // Navigate from navbar links only
        if (
          target.closest('[data-name="Nav"]') &&
          target.textContent?.includes("Tentang FLIK")
        ) {
          e.preventDefault();
          navigate("/tentang-flik");
        }
        // Logo click
        else if (target.closest('[data-name="Logo"]')) {
          e.preventDefault();
          navigate("/");
        }
      }}
    >
      <MerchantKami />
    </div>
  );
}