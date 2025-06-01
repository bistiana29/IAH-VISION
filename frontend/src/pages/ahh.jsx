import React, { useEffect, useState } from "react";
import "./../style.css";
import { useNavigate } from "react-router-dom";
import RowChartComponent from "../components/rowChart";
//import logo from "/images/logo.png";
//import bgAHH from "/images/baby.jpg";
import { getFaktorData } from "../services/api";

export default function AHH() {
  const navigate = useNavigate();
  const [year, setYear] = useState(2024);
  const [provinceFilter, setProvinceFilter] = useState("top10");
  const [ahhData, setAhhData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAHHData = async () => {
      setLoading(true);
      try {
        const data = await getFaktorData("ahh", year, "all");
        console.log("Data AHH yang diterima: ", data[0]);
        setAhhData(data);
      } catch (error) {
        console.error("Gagal memuat data AHH:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAHHData();
  }, [year]);

  // Proses filter data berdasarkan provinceFilter
  const getFilteredData = () => {
    const excludeIndonesia = ahhData.filter(
        (item) => item.provinsi.toUpperCase() !== "INDONESIA"
    );
    if (provinceFilter === "top10") {
      return [...excludeIndonesia].sort((a, b) => b.nilai - a.nilai).slice(0, 10);
    } else if (provinceFilter === "bottom10") {
      return [...excludeIndonesia].sort((a, b) => a.nilai - b.nilai).slice(0, 10);
    }
    return excludeIndonesia;
  };

  const filteredData = getFilteredData();

    // Hitung rata-rata AHH untuk data terfilter
  const averageAHH =
    filteredData.length > 0
      ? filteredData.reduce((acc, cur) => acc + cur.nilai, 0) / filteredData.length
      : 0;
  return (
    <div className="ipm-page">
      <nav className="top-nav">
        <div className="nav-left">
          <img src="/images/logo.png" alt="IAH Logo" className="nav-logo" />
        </div>
        <div className="nav-right">
        <a href="/" className="nav-link">BERANDA</a>
        <a href="/peta" className="nav-link">PETA</a>
        <a href="/prediksi" className="nav-link">PREDIKSI</a>
        </div>
      </nav>

      <main className="ipm-main-content" style={{ backgroundColor: "#64b5f6" }}>
        <h1 className="ipm-title">ANGKA HARAPAN HIDUP</h1>
        <p className="ipm-description">
          Angka Harapan Hidup (AHH) adalah rata-rata perkiraan tahun yang dapat dijalani seseorang sejak lahir. Faktor-faktor yang dapat memengaruhi AHH, di antaranya: Pola hidup sehat, Program pembangunan kesehatan, Program pemberantasan kemiskinan, Program kesehatan lingkungan, Program kecukupan gizi dan kalori, dll.
        </p>

        <div className="filter">
          <label htmlFor="year">Tahun: </label>
          <select
            id="year"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
          >
            {[...Array(15)].map((_, i) => (
              <option key={i} value={2010 + i}>
                {2010 + i}
              </option>
            ))}
          </select>
        </div>

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
            Rata-rata Angka Harapan Hidup tahun {year}: <strong>{averageAHH.toFixed(2)}</strong>
          </p>
        </div>

        {loading ? (
          <p>Memuat data...</p>
        ) : (
          <RowChartComponent data={filteredData} valueKey="nilai" labelKey="provinsi" title={`AHH Tahun ${year}`}/>
        )}
      </main>

      <div className="ipm-image-container" style={{ backgroundImage: 'url("/images/baby.jpg")' }}></div>

      <button className="feedback-button" onClick={() => navigate("/umpan-balik")}>
        UMPAN BALIK
      </button>
    </div>
  );
}
