import React, { useState } from "react";
import "./../style.css";
import { useNavigate } from "react-router-dom";
import RowChartComponent from "../components/rowchartAHH";  // Import the RowChartComponent
import logo from "../elements/logo.png"; // Logo for Navbar
import bgAHH from "../elements/baby.jpg"; // AHH image for the right side background

export default function AHH() {
  const navigate = useNavigate();
  const [year, setYear] = useState(2024);  // Default to 2024
  const [provinceFilter, setProvinceFilter] = useState("top10"); // Default to "top10" to show the top provinces
  
  // The data for AHH (just like in LeftSwipe, you would add actual AHH data here)
  const ahhData = [
    { province: "ACEH", ahh: 74.03 },
    { province: "SUMATERA UTARA", ahh: 74.02 },
    { province: "SUMATERA BARAT", ahh: 74.49 },
    { province: "RIAU", ahh: 74.79 },
    { province: "JAMBI", ahh: 73.43 },
    { province: "SUMATERA SELATAN", ahh: 72.3 },
    { province: "BENGKULU", ahh: 73.39 },
    { province: "LAMPUNG", ahh: 71.81 },
    { province: "KEP. BANGKA BELITUNG", ahh: 73.33 },
    { province: "KEPULAUAN RIAU", ahh: 77.97 },
    { province: "DKI JAKARTA", ahh: 83.08 },
    { province: "JAWA BARAT", ahh: 74.43 },
    { province: "JAWA TENGAH", ahh: 73.88 },
    { province: "D I YOGYAKARTA", ahh: 81.55 },
    { province: "JAWA TIMUR", ahh: 74.09 },
    { province: "BANTEN", ahh: 74.48 },
    { province: "BALI", ahh: 77.76 },
    { province: "NUSA TENGGARA BARAT", ahh: 70.93 },
    { province: "NUSA TENGGARA TIMUR", ahh: 67.39 },
    { province: "KALIMANTAN BARAT", ahh: 70.13 },
    { province: "KALIMANTAN TENGAH", ahh: 72.73 },
    { province: "KALIMANTAN SELATAN", ahh: 73.03 },
    { province: "KALIMANTAN TIMUR", ahh: 78.83 },
    { province: "SULAWESI UTARA", ahh: 75.03 },
    { province: "SULAWESI TENGAH", ahh: 71.56 },
    { province: "SULAWESI SELATAN", ahh: 74.05 },
    { province: "SULAWESI TENGGARA", ahh: 73.48 },
    { province: "GORONTALO", ahh: 71.23 },
    { province: "SULAWESI BARAT", ahh: 68.2 },
    { province: "MALUKU", ahh: 71.57 },
    { province: "MALUKU UTARA", ahh: 71.03 },
    { province: "PAPUA BARAT", ahh: 67.02 },
    { province: "PAPUA", ahh: 73 }
  ];

  // Filter the top 10 provinces based on the selected year and provinceFilter
  const top10Provinces = ahhData
    .sort((a, b) => b.ahh - a.ahh)  // Sort by AHH in descending order
    .slice(0, 10); // Get the top 10 provinces

  // Calculate the average AHH of the top 10 provinces
  const averageAHH = top10Provinces.reduce((acc, { ahh }) => acc + ahh, 0) / top10Provinces.length;

  return (
    <div className="ipm-page">
      {/* Navbar */}
      <nav className="top-nav">
        <img src={logo} alt="IAH Logo" className="nav-logo" />
        <a href="/" className="nav-link">BERANDA</a>
        <a href="/peta" className="nav-link">PETA</a>
        <a href="/prediksi" className="nav-link">PREDIKSI</a>
      </nav>

      <main className="ipm-main-content" style={{ backgroundColor: "#64b5f6" }}>
        <h1 className="ipm-title">ANGKA HARAPAN HIDUP</h1>
        <p className="ipm-description">
          Angka Harapan Hidup (AHH) adalah rata-rata perkiraan tahun yang dapat dijalani seseorang sejak lahir. Faktor-faktor yang dapat memengaruhi AHH, di antaranya: Pola hidup sehat, Program pembangunan kesehatan, Program pemberantasan kemiskinan, Program kesehatan lingkungan, Program kecukupan gizi dan kalori, dll.
        </p>
        
        {/* Year Filter */}
        <div className="filter">
          <label htmlFor="year">Tahun: </label>
          <select
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            {[...Array(15)].map((_, i) => (
              <option key={i} value={2010 + i}>
                {2010 + i}
              </option>
            ))}
          </select>
        </div>

        {/* Province Filter */}
        <div className="filter">
          <label htmlFor="province">Provinsi: </label>
          <select
            id="province"
            value={provinceFilter}
            onChange={(e) => setProvinceFilter(e.target.value)}
          >
            <option value="all">Semua Provinsi</option>
            <option value="top10">10 Provinsi Tertinggi</option>
            <option value="bottom10">10 Provinsi Terendah</option>
          </select>
        </div>

        {/* Average Value
        <div className="average-value">
          <p>Rata-rata AHH tahun {year}: <strong>{averageAHH.toFixed(2)}</strong></p>
        </div> */}

        {/* Row Chart */}
        <RowChartComponent year={year} provinceFilter={provinceFilter} ipmData={top10Provinces} />
      </main>

      {/* AHH Image on the Right */}
      <div className="ipm-image-container" style={{ backgroundImage: `url(${bgAHH})` }}></div>

      {/* Feedback Button */}
      <button className="feedback-button" onClick={() => navigate("/umpan-balik")}>UMPAN BALIK</button>
    </div>
  );
}
