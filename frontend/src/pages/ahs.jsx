import React, { useEffect, useState } from "react";
import "./../style.css";
import { useNavigate } from "react-router-dom";
import RowChartAHS from "../components/rowChart";  // Sesuaikan import
//import logo from "/images/logo.png";
//import bgAHS from "/images/icon_ahs.png";
import { getFaktorData } from "../services/api"; // Pastikan ada di api.js

export default function AHS() {
  const navigate = useNavigate();
  const [year, setYear] = useState(2024);
  const [provinceFilter, setProvinceFilter] = useState("top10");
  const [ahsData, setAhsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAHSData = async () => {
      setLoading(true);
      try {
        // Ambil data AHS dari backend, misal endpoint /ahs/:year/all
        const data = await getFaktorData("ahs", year, "all");
        setAhsData(data);
      } catch (error) {
        console.error("Gagal memuat data AHS:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAHSData();
  }, [year]);

  // Filter exclude provinsi "INDONESIA" dan filter sesuai provinceFilter
  const getFilteredData = () => {
    const dataWithoutIndonesia = ahsData.filter(
      (item) => item.provinsi.toUpperCase() !== "INDONESIA"
    );

    if (provinceFilter === "top10") {
      return [...dataWithoutIndonesia]
        .sort((a, b) => b.nilai - a.nilai)
        .slice(0, 10);
    } else if (provinceFilter === "bottom10") {
      return [...dataWithoutIndonesia]
        .sort((a, b) => a.nilai - b.nilai)
        .slice(0, 10);
    }
    // Semua provinsi kecuali Indonesia
    return dataWithoutIndonesia;
  };

  const filteredData = getFilteredData();

  // Hitung rata-rata AHS untuk data terfilter
  const averageAHS =
    filteredData.length > 0
      ? filteredData.reduce((acc, cur) => acc + cur.nilai, 0) / filteredData.length
      : 0;

  return (
    <div className="ipm-page">
      <nav className="top-nav">
        <img src="/images/logo.png" alt="IAH Logo" className="nav-logo" />
        <a href="/" className="nav-link">BERANDA</a>
        <a href="/peta" className="nav-link">PETA</a>
        <a href="/prediksi" className="nav-link">PREDIKSI</a>
      </nav>

      <main className="ipm-main-content" style={{ backgroundColor: "#64b5f6" }}>
        <h1 className="ipm-title">ANGKA HARAPAN SEKOLAH</h1>
        <p className="ipm-description">
          Angka Harapan Sekolah adalah indikator yang menunjukkan lamanya sekolah yang diharapkan akan dirasakan oleh anak pada usia tertentu di masa depan. Harapan Lama Sekolah dihitung berdasarkan data pendidikan yang dilaporkan oleh Badan Pusat Statistik (BPS).
        </p>

        {/* Tahun */}
        <div className="filter">
          <label htmlFor="year">Tahun: </label>
          <select
            id="year"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
          >
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

        {/* Filter Provinsi */}
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

        {/* Rata-rata AHS */}
        <div className="average-value">
          <p>
            Rata-rata Angka Harapan Sekolah tahun {year}: <strong>{averageAHS.toFixed(2)}</strong>
          </p>
        </div>

        {/* Chart */}
        {loading ? (
          <p>Memuat data...</p>
        ) : (
          <RowChartAHS
            data={filteredData}
            valueKey="nilai"
            labelKey="provinsi"
            title={`AHS Tahun ${year}`}
          />
        )}
      </main>

      <div className="ipm-image-container" style={{ backgroundImage: 'url("/images/icon_ahs.png")' }}></div>

      <button className="feedback-button" onClick={() => navigate("/umpan-balik")}>
        UMPAN BALIK
      </button>
    </div>
  );
}
