import React, { useState } from "react";
import "./../style.css";
import { useNavigate } from "react-router-dom";
import RowChartComponent from "../components/rowchartIPM";  // Import the RowChartComponent
import logo from "../elements/logo.png"; // Logo for Navbar
import bgIPM from "../elements/icon_ipm.png"; // IPM image for right side background

export default function LeftSwipe() {
  const navigate = useNavigate();
  const [year, setYear] = useState(2024);  // Default to 2024
  const [provinceFilter, setProvinceFilter] = useState("top10"); // Default to "top10" to show the top provinces
  
  // The data for IPM values for 2024 and corresponding provinces
  const ipmData = [
    { province: "ACEH", ipm: 74.03 },
    { province: "SUMATERA UTARA", ipm: 74.02 },
    { province: "SUMATERA BARAT", ipm: 74.49 },
    { province: "RIAU", ipm: 74.79 },
    { province: "JAMBI", ipm: 73.43 },
    { province: "SUMATERA SELATAN", ipm: 72.3 },
    { province: "BENGKULU", ipm: 73.39 },
    { province: "LAMPUNG", ipm: 71.81 },
    { province: "KEP. BANGKA BELITUNG", ipm: 73.33 },
    { province: "KEPULAUAN RIAU", ipm: 77.97 },
    { province: "DKI JAKARTA", ipm: 83.08 },
    { province: "JAWA BARAT", ipm: 74.43 },
    { province: "JAWA TENGAH", ipm: 73.88 },
    { province: "D I YOGYAKARTA", ipm: 81.55 },
    { province: "JAWA TIMUR", ipm: 74.09 },
    { province: "BANTEN", ipm: 74.48 },
    { province: "BALI", ipm: 77.76 },
    { province: "NUSA TENGGARA BARAT", ipm: 70.93 },
    { province: "NUSA TENGGARA TIMUR", ipm: 67.39 },
    { province: "KALIMANTAN BARAT", ipm: 70.13 },
    { province: "KALIMANTAN TENGAH", ipm: 72.73 },
    { province: "KALIMANTAN SELATAN", ipm: 73.03 },
    { province: "KALIMANTAN TIMUR", ipm: 78.83 },
    { province: "SULAWESI UTARA", ipm: 75.03 },
    { province: "SULAWESI TENGAH", ipm: 71.56 },
    { province: "SULAWESI SELATAN", ipm: 74.05 },
    { province: "SULAWESI TENGGARA", ipm: 73.48 },
    { province: "GORONTALO", ipm: 71.23 },
    { province: "SULAWESI BARAT", ipm: 68.2 },
    { province: "MALUKU", ipm: 71.57 },
    { province: "MALUKU UTARA", ipm: 71.03 },
    { province: "PAPUA BARAT", ipm: 67.02 },
    { province: "PAPUA", ipm: 73 }
  ];

  // Filter the top 10 provinces based on the selected year and provinceFilter
  const top10Provinces = ipmData
    .sort((a, b) => b.ipm - a.ipm)  // Sort by IPM in descending order
    .slice(0, 10); // Get the top 10 provinces

  // Calculate the average IPM of the top 10 provinces
  const averageIPM = top10Provinces.reduce((acc, { ipm }) => acc + ipm, 0) / top10Provinces.length;

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
        <h1 className="ipm-title">INDEKS PEMBANGUNAN MANUSIA</h1>
        <p className="ipm-description">
          Indeks Pembangunan Manusia (IPM) merupakan indikator komposit untuk mengukur capaian pembangunan kualitas hidup manusia. Pada tahun 1990, United Nations Development Programme (UNDP) membangun indeks ini untuk menekankan pentingnya manusia beserta sumber daya yang dimiliknya dalam pembangunan. Indeks ini terbentuk dari rata-rata ukur capaian tiga dimensi utama pembangunan manusia, yaitu umur panjang dan hidup sehat, pengetahuan, dan standar hidup layak. Dimensi umur panjang dan hidup sehat diukur dengan umur harapan hidup saat lahir. Dimensi pengetahuan diukur dengan rata-rata lama sekolah penduduk berusia 25 tahun ke atas dan harapan lama sekolah penduduk yang berumur 7 tahun. Sementara itu, dimensi standar hidup layak diukur dengan pengeluaran riil per kapita yang disesuaikan.
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
          <p>Rata-rata IPM tahun {year}: <strong>{averageIPM.toFixed(2)}</strong></p>
        </div> */}

        {/* Row Chart */}
        <RowChartComponent year={year} provinceFilter={provinceFilter} ipmData={top10Provinces} />
      </main>

      {/* IPM Image on the Right */}
      <div className="ipm-image-container" style={{ backgroundImage: `url(${bgIPM})` }}></div>

      {/* Feedback Button */}
      <button className="feedback-button" onClick={() => navigate("/umpan-balik")}>UMPAN BALIK</button>
    </div>
  );
}
