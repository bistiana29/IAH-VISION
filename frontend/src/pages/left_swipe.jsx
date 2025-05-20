import React, { useState } from "react";
import "./../style.css";
import BarChartComponent from "../components/barchart";  // Assuming you have a BarChartComponent
import logo from "../elements/logo.png"; // Logo for Navbar

// Sample dynamic background images
import bgIPM from "../elements/icon_ipm.png"; // IPM image for right side background

export default function LeftSwipe() {
  const [year, setYear] = useState(2024);  // Default to 2024
  const [provinceFilter, setProvinceFilter] = useState("all"); // Default to "all"
  
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

        {/* Average Value */}
        <div className="average-value">
          <p>Rata-rata IPM tahun {year}: <strong>75.6</strong></p>
        </div>

        {/* Bar Chart */}
        <BarChartComponent year={year} provinceFilter={provinceFilter} />
      </main>

      {/* IPM Image on the Right */}
      <div className="ipm-image-container" style={{ backgroundImage: `url(${bgIPM})` }}></div>


      {/* Feedback Button */}
      <button className="feedback-button">UMPAN BALIK</button>
    </div>
  );
}
