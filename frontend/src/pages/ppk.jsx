import React, { useState } from "react";
import "./../style.css";
import { useNavigate } from "react-router-dom";
import RowChartRLS from "../components/rowchartPPK";  // Correct import for RowChartRLS
import logo from "../elements/logo.png"; // Logo for Navbar
import bgAHS from "../elements/icon_ppk.png"; // Image for the Right Side Background

export default function RLS() {
  const navigate = useNavigate();
  const [year, setYear] = useState(2024);  // Default to 2024
  const [provinceFilter, setProvinceFilter] = useState("top10"); // Default to "top10" to show the top provinces

  // The data for RLS values (replace with your actual RLS data)
  const rlsData = [
    { province: "ACEH", rls: 9.64 },
    { province: "SUMATERA UTARA", rls: 9.93 },
    { province: "SUMATERA BARAT", rls: 9.44 },
    { province: "RIAU", rls: 9.43 },
    { province: "JAMBI", rls: 8.9 },
    { province: "SUMATERA SELATAN", rls: 8.57 },
    { province: "BENGKULU", rls: 9.04 },
    { province: "LAMPUNG", rls: 8.36 },
    { province: "KEP. BANGKA BELITUNG", rls: 8.33 },
    { province: "KEPULAUAN RIAU", rls: 10.5 },
    { province: "DKI JAKARTA", rls: 11.49 },
    { province: "JAWA BARAT", rls: 8.87 },
    { province: "JAWA TENGAH", rls: 8.02 },
    { province: "D I YOGYAKARTA", rls: 9.92 },
    { province: "JAWA TIMUR", rls: 8.28 },
    { province: "BANTEN", rls: 9.23 },
    { province: "BALI", rls: 9.54 },
    { province: "NUSA TENGGARA BARAT", rls: 7.87 },
    { province: "NUSA TENGGARA TIMUR", rls: 8.02 },
    { province: "KALIMANTAN BARAT", rls: 7.78 },
    { province: "KALIMANTAN TENGAH", rls: 8.81 },
    { province: "KALIMANTAN SELATAN", rls: 8.62 },
    { province: "KALIMANTAN TIMUR", rls: 10.02 },
    { province: "SULAWESI UTARA", rls: 9.84 },
    { province: "SULAWESI TENGAH", rls: 9.04 },
    { province: "SULAWESI SELATAN", rls: 8.86 },
    { province: "SULAWESI TENGGARA", rls: 9.42 },
    { province: "GORONTALO", rls: 8.29 },
    { province: "SULAWESI BARAT", rls: 8.15 },
    { province: "MALUKU", rls: 10.26 },
    { province: "MALUKU UTARA", rls: 9.37 },
    { province: "PAPUA BARAT", rls: 7.86 },
    { province: "PAPUA", rls: 9.82 }
  ];

  // Filter the top 10 provinces based on the selected year and provinceFilter
  const top10Provinces = rlsData
    .sort((a, b) => b.rls - a.rls)  // Sort by RLS in descending order
    .slice(0, 10); // Get the top 10 provinces

  // Calculate the average RLS of the top 10 provinces
  const averageRLS = top10Provinces.reduce((acc, { rls }) => acc + rls, 0) / top10Provinces.length;

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
        <h1 className="ipm-title">PENGELUARAN PER KAPITA</h1>
        <p className="ipm-description">
         Pengeluaran per kapita menurut BPS adalah data yang menunjukkan rata-rata pengeluaran yang dilakukan oleh setiap individu dalam suatu populasi atau daerah tertentu. Data ini dihitung dengan membagi total pengeluaran yang dikeluarkan oleh seluruh anggota rumah tangga dengan jumlah anggota rumah tangga.
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
          <p>Rata-rata pengeluaran per kapita tahun {year}: <strong>{averageRLS.toFixed(2)}</strong></p>
        </div>

        {/* Row Chart */}
        <RowChartRLS year={year} provinceFilter={provinceFilter} rlsData={top10Provinces} />
      </main>

      {/* RLS Image on the Right */}
      <div className="ipm-image-container" style={{ backgroundImage: `url(${bgAHS})` }}></div>

      {/* Feedback Button */}
      <button className="feedback-button" onClick={() => navigate("/umpan-balik")}>UMPAN BALIK</button>
    </div>
  );
}
