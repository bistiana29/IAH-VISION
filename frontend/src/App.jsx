import { Routes, Route } from "react-router-dom"; 
import LandingPage from "./pages/index.jsx";
import LeftSwipe from "./pages/left_swipe.jsx";
import AHH from "./pages/ahh.jsx";  // Correct import after default export
import AHS from "./pages/ahs.jsx";  // Correct import after default export
import RLS from "./pages/rls.jsx";  // Correct import after default export
import PPK from "./pages/ppk.jsx";  // Correct import after default export
import Peta from "./pages/peta.jsx";  // Import the Peta component for /peta route
import UmpanBalik from "./pages/umpan_balik.jsx";  // Import the new page for feedback
import Prediksi from "./pages/prediksi.jsx";  // Import the Prediksi page for /prediksi route

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ipm" element={<LeftSwipe />} />
      <Route path="/ahh" element={<AHH />} />
      <Route path="/ahs" element={<AHS />} />
      <Route path="/rls" element={<RLS />} />
      <Route path="/ppk" element={<PPK />} />
      <Route path="/peta" element={<Peta />} />  {/* Add /peta route */}
      <Route path="/prediksi" element={<Prediksi />} />  {/* Add /prediksi route */}
      <Route path="/umpan-balik" element={<UmpanBalik />} />
    </Routes>
  );
}

export default App;
