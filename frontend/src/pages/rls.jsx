import React, { useEffect, useState } from "react";
import "./../style.css";
import { useNavigate } from "react-router-dom";
import RowChartRLS from "../components/rowChart";
//import logo from "/images/logo.png";
//import bgRLS from "/images/icon_rls.png";
import { getFaktorData } from "../services/api";

export default function RLS() {
  const navigate = useNavigate();
  const [year, setYear] = useState(2024);
  const [provinceFilter, setProvinceFilter] = useState("top10");
  const [rlsData, setRlsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRLSData = async () => {
      setLoading(true);
      try {
        const data = await getFaktorData("rls", year, "all");
        setRlsData(data);
      } catch (error) {
        console.error("Gagal memuat data RLS:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRLSData();
  }, [year]);

  const getFilteredData = () => {
    const dataWithoutIndonesia = rlsData.filter(
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
    return dataWithoutIndonesia;
  };

  const filteredData = getFilteredData();

  const averageRLS =
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
        <h1 className="ipm-title">RATA-RATA LAMA SEKOLAH</h1>
        <p className="ipm-description">
          Rata-rata Lama Sekolah (RLS) adalah ukuran statistik yang dihitung oleh Badan Pusat Statistik (BPS) untuk mengukur lamanya pendidikan formal yang ditempuh oleh penduduk usia 15 tahun ke atas. Indikator ini menunjukkan rata-rata jumlah tahun yang dihabiskan oleh seseorang untuk menempuh semua jenis pendidikan yang pernah dijalani.
        </p>

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

        <div className="average-value">
          <p>Rata-rata Lama Sekolah tahun {year}: <strong>{averageRLS.toFixed(2)}</strong></p>
        </div>

        {loading ? (
          <p>Memuat data...</p>
        ) : (
          <RowChartRLS
            data={filteredData}
            valueKey="nilai"
            labelKey="provinsi"
            title={`RLS Tahun ${year}`}
          />
        )}
      </main>

      <div className="ipm-image-container" style={{ backgroundImage: 'url("/images/icon_rls.png")' }}></div>

      <button className="feedback-button" onClick={() => navigate("/umpan-balik")}>
        UMPAN BALIK
      </button>
    </div>
  );
}
