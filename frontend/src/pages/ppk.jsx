import React, { useEffect, useState } from "react";
import "./../style.css";
import { useNavigate } from "react-router-dom";
import RowChartPPK from "../components/rowChart";
import logo from "../elements/logo.png";
import bgPPK from "../elements/icon_ppk.png";
import { getFaktorData } from "../services/api";

export default function PPK() {
  const navigate = useNavigate();
  const [year, setYear] = useState(2024);
  const [provinceFilter, setProvinceFilter] = useState("top10");
  const [ppkData, setPpkData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPPKData = async () => {
      setLoading(true);
      try {
        const data = await getFaktorData("ppk", year, "all");
        setPpkData(data);
      } catch (error) {
        console.error("Gagal memuat data PPK:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPPKData();
  }, [year]);

  // Filter exclude "INDONESIA" dan sesuai provinceFilter
  const getFilteredData = () => {
    const dataWithoutIndonesia = ppkData.filter(
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

  const averagePPK =
    filteredData.length > 0
      ? filteredData.reduce((acc, cur) => acc + cur.nilai, 0) / filteredData.length
      : 0;

  return (
    <div className="ipm-page">
      <nav className="top-nav">
        <img src={logo} alt="IAH Logo" className="nav-logo" />
        <a href="/" className="nav-link">BERANDA</a>
        <a href="/peta" className="nav-link">PETA</a>
        <a href="/prediksi" className="nav-link">PREDIKSI</a>
      </nav>

      <main className="ipm-main-content" style={{ backgroundColor: "#64b5f6" }}>
        <h1 className="ipm-title">PENGELUARAN PER KAPITA</h1>
        <p className="ipm-description">
          Pengeluaran per kapita menurut BPS adalah data yang menunjukkan rata-rata pengeluaran yang dilakukan oleh setiap individu dalam suatu populasi atau daerah tertentu. Data ini dihitung dengan membagi total pengeluaran yang dikeluarkan oleh seluruh anggota rumah tangga dengan jumlah anggota rumah tangga.
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
          <p>
            Rata-rata pengeluaran per kapita tahun {year}: <strong>{averagePPK.toFixed(2)}</strong>
          </p>
        </div>

        {loading ? (
          <p>Memuat data...</p>
        ) : (
          <RowChartPPK
            data={filteredData}
            valueKey="nilai"
            labelKey="provinsi"
            title={`Pengeluaran Per Kapita Tahun ${year}`}
          />
        )}
      </main>

      <div
        className="ipm-image-container"
        style={{ backgroundImage: `url(${bgPPK})` }}
      ></div>

      <button className="feedback-button" onClick={() => navigate("/umpan-balik")}>
        UMPAN BALIK
      </button>
    </div>
  );
}
