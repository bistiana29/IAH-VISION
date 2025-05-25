import React, { useState } from "react";
import "./../style.css";
import { useNavigate } from "react-router-dom";
import RowChartAHS from "../components/rowchartAHS";  // Correct import for RowChartAHS
import logo from "../elements/logo.png"; // Logo for Navbar
import bgAHS from "../elements/icon_ahs.png"; // AHS Image for the Right Side Background

export default function AHS() {
  const navigate = useNavigate();
  const [year, setYear] = useState(2024);  // Default to 2024
  const [provinceFilter, setProvinceFilter] = useState("top10"); // Default to "top10" to show the top provinces

  // The data for AHS values (you provided the actual data for AHS)
  const ahsData = [
    { province: "ACEH", ahs: 14.39 },
    { province: "SUMATERA UTARA", ahs: 13.49 },
    { province: "SUMATERA BARAT", ahs: 14.3 },
    { province: "RIAU", ahs: 13.42 },
    { province: "JAMBI", ahs: 13.14 },
    { province: "SUMATERA SELATAN", ahs: 12.64 },
    { province: "BENGKULU", ahs: 13.75 },
    { province: "LAMPUNG", ahs: 12.78 },
    { province: "KEP. BANGKA BELITUNG", ahs: 12.49 },
    { province: "KEPULAUAN RIAU", ahs: 13.27 },
    { province: "DKI JAKARTA", ahs: 13.51 },
    { province: "JAWA BARAT", ahs: 12.8 },
    { province: "JAWA TENGAH", ahs: 12.86 },
    { province: "D I YOGYAKARTA", ahs: 15.7 },
    { province: "JAWA TIMUR", ahs: 13.43 },
    { province: "BANTEN", ahs: 13.1 },
    { province: "BALI", ahs: 13.62 },
    { province: "NUSA TENGGARA BARAT", ahs: 13.98 },
    { province: "NUSA TENGGARA TIMUR", ahs: 13.23 },
    { province: "KALIMANTAN BARAT", ahs: 12.68 },
    { province: "KALIMANTAN TENGAH", ahs: 12.77 },
    { province: "KALIMANTAN SELATAN", ahs: 12.87 },
    { province: "KALIMANTAN TIMUR", ahs: 14.03 },
    { province: "SULAWESI UTARA", ahs: 12.97 },
    { province: "SULAWESI TENGAH", ahs: 13.34 },
    { province: "SULAWESI SELATAN", ahs: 13.55 },
    { province: "SULAWESI TENGGARA", ahs: 13.71 },
    { province: "GORONTALO", ahs: 13.17 },
    { province: "SULAWESI BARAT", ahs: 12.89 },
    { province: "MALUKU", ahs: 14.09 },
    { province: "MALUKU UTARA", ahs: 13.75 },
    { province: "PAPUA BARAT", ahs: 13.17 },
    { province: "PAPUA", ahs: 13.72 }
  ];

  // Filter the top 10 provinces based on the selected year and provinceFilter
  const top10Provinces = ahsData
    .sort((a, b) => b.ahs - a.ahs)  // Sort by AHS in descending order
    .slice(0, 10); // Get the top 10 provinces

  // Calculate the average AHS of the top 10 provinces
  const averageAHS = top10Provinces.reduce((acc, { ahs }) => acc + ahs, 0) / top10Provinces.length;

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
        <h1 className="ipm-title">INDEKS AHS</h1>
        <p className="ipm-description">
          Angka Harapan Lama Sekolah  adalah indikator yang menunjukkan lamanya sekolah yang diharapkan akan dirasakan oleh anak pada usia tertentu di masa depan. HLS dihitung berdasarkan data pendidikan yang dilaporkan oleh Badan Pusat Statistik (BPS).
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

        {/* Average Value */}
        <div className="average-value">
          <p>Rata-rata AHS tahun {year}: <strong>{averageAHS.toFixed(2)}</strong></p>
        </div>

        {/* Row Chart */}
        <RowChartAHS year={year} provinceFilter={provinceFilter} ipmData={top10Provinces} />
      </main>

      {/* AHS Image on the Right */}
      <div className="ipm-image-container" style={{ backgroundImage: `url(${bgAHS})` }}></div>

      {/* Feedback Button */}
      <button className="feedback-button" onClick={() => navigate("/umpan-balik")}>UMPAN BALIK</button>
    </div>
  );
}
