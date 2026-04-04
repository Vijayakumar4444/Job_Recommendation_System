import { Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/home";
import Joblist from "./pages/joblist/Joblist";
import JobPage from "./pages/jobpage/JobPage";
  import Recent from "./pages/recent/Recent";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    if (window.SplayModule) {
      window.SplayModule().then((mod) => {
        window.Splay = mod;
        window.SplayReady = true;   // 🔥 KEY FLAG
        console.log("Splay fully ready 🚀");
      });
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Joblist />} />
      <Route path="/filterjobs" element={<JobPage />} />
    

<Route path="/recent" element={<Recent />} />
    </Routes>
  );
}

export default App;