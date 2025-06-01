import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // ✅ Tambahkan ini
import MapCluster from "../components/MapCluster";
import logo from "../elements/logo.png";
import provinceCoords from "../components/provinceCoords";
import { getClusterData } from "../services/api";

export default function Peta() {
  const [year, setYear] = useState(2010);
  const [clusterData, setClusterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // ✅ Inisialisasi navigate

  useEffect(() => {
    setLoading(true);
    getClusterData(year)
      .then(data => {
        const mergedData = data.data.map(item => {
          const coords = provinceCoords[item.provinsi.toUpperCase()] || { lat: 0, lon: 0 };
          return {
            ...item,
            lat: coords.lat,
            lon: coords.lon,
            clusterColor: item.cluster === 1 ? "green" : item.cluster === 2 ? "red" : "orange"
          };
        });
        setClusterData(mergedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);  // ✅ Tambahkan log untuk debug
        setError('Gagal mengambil data cluster');
        setLoading(false);
      });
  }, [year]);

  const handleYearChange = (e) => setYear(Number(e.target.value));

  if (loading) return <p>Loading map data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="ipm-page">
      {/* Navbar */}
        <nav className="top-nav">
          <div className="nav-left">
             <img src={logo} alt="IAH Logo" className="nav-logo" />           
          </div>
          <div className="nav-right">
          <a href="/" className="nav-link">BERANDA</a>
          <a href="/peta" className="nav-link">PETA</a>
          <a href="/prediksi" className="nav-link">PREDIKSI</a>
          </div>
        </nav>

      <main className="predict-main-content" style={{ backgroundColor: "#64b5f6", minHeight: "100vh" }}>
        <h1 className="ipm-title">PETA CLUSTER</h1>
        <p className="ipm-description">
          Peta ini menunjukkan distribusi cluster provinsi berdasarkan tahun.
        </p>
        {/* Year Filter */}
        <div className="filter">
          <label htmlFor="year">Tahun: </label>
          <select id="year" value={year} onChange={handleYearChange}>
            {[...Array(15)].map((_, i) => {
              const y = 2010 + i;
              return (
                <option key={y} value={y}>
                  {y}
                </option>
              );
            })}
          </select>
        </div>

        {/* Map Cluster */}
        <MapCluster data={clusterData} />
      </main>

      <button className="feedback-button" onClick={() => navigate("/umpan-balik")}>
        UMPAN BALIK
      </button>
    </div>
  );
}
