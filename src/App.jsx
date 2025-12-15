import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Articles from "./pages/Articles";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import ScrollToTop from "./components/ScrollToTop";
import Refund from "./pages/Refund";
import ArticleDetails from "./pages/ArticleDetails";
// import Subscribe from "./pages/Subscribe";
import Snowfall from "react-snowfall";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import NotFound from "./components/NotFound";
// import SubscriptionSuccess from "./pages/SubscriptionSuccess";
// import SubscriptionCancel from "./pages/SubscriptionCancel";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0, // top:0, right:0, bottom:0, left:0
          pointerEvents: "none",
          zIndex: 9999,
        }}
      >
        <Snowfall snowflakeCount={200} color="#f8fffd" radius={[1, 3]} />
      </div>

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:slug" element={<ArticleDetails />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          {/* <Route path="/subscribe" element={<Subscribe />} /> */}
          {/* <Route path="/subscription/success" element={<SubscriptionSuccess />} /> */}
          {/* <Route path="/subscription/cancel" element={<SubscriptionCancel />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
