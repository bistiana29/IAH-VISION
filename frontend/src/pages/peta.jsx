import React, { useState } from "react";
import "./../style.css";
import { useNavigate } from "react-router-dom";
import MapCluster from "../components/MapCluster"; // Import MapCluster component
import logo from "../elements/logo.png"; // Logo for Navbar


// Data with lat, lon, and cluster color for each province
const clusterData = {
  2010: [
    { province: "ACEH", lat: 4.5, lon: 96.95, clusterColor: "green" },
    { province: "SUMATERA UTARA", lat: 3.595, lon: 98.88, clusterColor: "green" },
    { province: "SUMATERA BARAT", lat: -0.87, lon: 100.34, clusterColor: "green" },
    { province: "RIAU", lat: 0.57, lon: 101.45, clusterColor: "green" },
    { province: "JAMBI", lat: -1.61, lon: 103.61, clusterColor: "green" },
    { province: "SUMATERA SELATAN", lat: -3.315, lon: 104.75, clusterColor: "green" },
    { province: "BENGKULU", lat: -3.75, lon: 102.25, clusterColor: "green" },
    { province: "LAMPUNG", lat: -5.25, lon: 105.25, clusterColor: "green" },
    { province: "KEP. BANGKA BELITUNG", lat: -2.5, lon: 106.08, clusterColor: "green" },
    { province: "KEP. RIAU", lat: 0.9, lon: 104.4, clusterColor: "green" },
    { province: "DKI JAKARTA", lat: -6.2088, lon: 106.8456, clusterColor: "green" },
    { province: "JAWA BARAT", lat: -6.9, lon: 107.6, clusterColor: "green" },
    { province: "JAWA TENGAH", lat: -7.6, lon: 110.5, clusterColor: "green" },
    { province: "D I YOGYAKARTA", lat: -7.8, lon: 110.37, clusterColor: "green" },
    { province: "JAWA TIMUR", lat: -8.25, lon: 112.75, clusterColor: "green" },
    { province: "BANTEN", lat: -6.0, lon: 106.0, clusterColor: "green" },
    { province: "BALI", lat: -8.25, lon: 115.5, clusterColor: "green" },
    { province: "NUSA TENGGARA BARAT", lat: -8.5, lon: 116.5, clusterColor: "green" },
    { province: "NUSA TENGGARA TIMUR", lat: -9.0, lon: 120.5, clusterColor: "green" },
    { province: "KALIMANTAN BARAT", lat: -0.7, lon: 109.3, clusterColor: "green" },
    { province: "KALIMANTAN TENGAH", lat: -2.5, lon: 113.5, clusterColor: "green" },
    { province: "KALIMANTAN SELATAN", lat: -3.0, lon: 115.5, clusterColor: "green" },
    { province: "KALIMANTAN TIMUR", lat: -1.0, lon: 116.5, clusterColor: "green" },
    { province: "SULAWESI UTARA", lat: 1.6, lon: 124.8, clusterColor: "green" },
    { province: "SULAWESI TENGAH", lat: -0.5, lon: 120.0, clusterColor: "green" },
    { province: "SULAWESI SELATAN", lat: -4.0, lon: 119.5, clusterColor: "green" },
    { province: "SULAWESI TENGGARA", lat: -3.5, lon: 122.5, clusterColor: "green" },
    { province: "GORONTALO", lat: 0.6, lon: 123.0, clusterColor: "green" },
    { province: "SULAWESI BARAT", lat: -2.8, lon: 119.3, clusterColor: "green" },
    { province: "MALUKU", lat: -3.3, lon: 128.2, clusterColor: "green" },
    { province: "MALUKU UTARA", lat: 1.5, lon: 127.5, clusterColor: "green" },
    { province: "PAPUA BARAT", lat: -1.1, lon: 133.6, clusterColor: "green" },
    { province: "PAPUA", lat: -4.5, lon: 140.7, clusterColor: "red" },  // PAPUA with a red cluster
  ],
  // Add other years' cluster data similarly...
};

export default function Peta() {
  const navigate = useNavigate();
  const [year, setYear] = useState(2010);  // Default to 2010
  const [provinceFilter, setProvinceFilter] = useState("top10"); // Default to "top10" to show the top provinces

  // Handle the year change to update the data on the map
  const handleYearChange = (e) => {
    setYear(Number(e.target.value));
  };

  // Filter the cluster data based on the selected year
  const dataForSelectedYear = clusterData[year] || [];

  return (
    <div className="ipm-page">
      {/* Navbar */}
      <nav className="top-nav">
        <img src={logo} alt="IAH Logo" className="nav-logo" />
        <a href="/" className="nav-link">BERANDA</a>
        <a href="/peta" className="nav-link">PETA</a>
        <a href="/prediksi" className="nav-link">PREDIKSI</a>
      </nav>

      <main className="ipm-main-content" style={{ backgroundColor: "#64b5f6", minHeight: "100vh", backgroundSize: "cover", backgroundPosition: "center" }}>
        <h1 className="ipm-title">PETA CLUSTER</h1>
        <p className="ipm-description">
          Peta ini menunjukkan distribusi faktor-faktor pembangunan berdasarkan tahun untuk setiap provinsinya dan didapatkan beberapa pola tertentu dari data. Terdapat 2 kelompok dengan warna yang berbeda dan perlu adanya penyelidikan lebih lanjut terkait kelompok provinsi terkait"
        </p>
        {/* Year Filter */}
        <div className="filter">
          <label htmlFor="year">Tahun: </label>
          <select
            id="year"
            value={year}
            onChange={handleYearChange}
          >
            {[2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024].map((yearOption) => (
              <option key={yearOption} value={yearOption}>
                {yearOption}
              </option>
            ))}
          </select>
        </div>

        {/* Map Cluster */}
        <MapCluster data={dataForSelectedYear} />
      </main>

      {/* Feedback Button */}
      <button className="feedback-button" onClick={() => navigate("/umpan-balik")}>UMPAN BALIK</button>
    </div>
  );
}
