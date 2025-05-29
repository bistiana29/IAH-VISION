import React, { useEffect, useState } from "react";
import "./../style.css";
import { useNavigate } from "react-router-dom";
import RowChartIPM from "../components/rowChart";  // Pastikan komponen ini ada
import logo from "../elements/logo.png";
import bgIPM from "../elements/icon_ipm.png";
import { getFaktorData } from "../services/api";

export default function IPM() {
  const navigate = useNavigate();
  const [year, setYear] = useState(2024);
  const [provinceFilter, setProvinceFilter] = useState("top10");
  const [ipmData, setIpmData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIPMData = async () => {
      setLoading(true);
      try {
        const data = await getFaktorData("ipm", year, "all");
        setIpmData(data);
      } catch (error) {
        console.error("Gagal memuat data IPM:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchIPMData();
  }, [year]);

  // Exclude "INDONESIA" dan filter berdasarkan provinceFilter
  const getFilteredData = () => {
    const dataWithoutIndonesia = ipmData.filter(
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

  // Kalkulasi rata-rata IPM (bisa ditampilkan kalau mau)
  const averageIPM =
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
        <h1 className="ipm-title">INDEKS PEMBANGUNAN MANUSIA</h1>
        <p className="ipm-description">
          Indeks Pembangunan Manusia (IPM) merupakan indikator komposit untuk mengukur capaian pembangunan kualitas hidup manusia. Pada tahun 1990, United Nations Development Programme (UNDP) membangun indeks ini untuk menekankan pentingnya manusia beserta sumber daya yang dimiliknya dalam pembangunan. Indeks ini terbentuk dari rata-rata ukur capaian tiga dimensi utama pembangunan manusia, yaitu umur panjang dan hidup sehat, pengetahuan, dan standar hidup layak. Dimensi umur panjang dan hidup sehat diukur dengan umur harapan hidup saat lahir. Dimensi pengetahuan diukur dengan rata-rata lama sekolah penduduk berusia 25 tahun ke atas dan harapan lama sekolah penduduk yang berumur 7 tahun. Sementara itu, dimensi standar hidup layak diukur dengan pengeluaran riil per kapita yang disesuaikan.
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

        {/* Kalau mau tampilkan rata-rata, aktifkan bagian ini */}
        
        <div className="average-value">
          <p>Rata-rata IPM tahun {year}: <strong>{averageIPM.toFixed(2)}</strong></p>
        </div> 
       

        {loading ? (
          <p>Memuat data...</p>
        ) : (
          <RowChartIPM
            data={filteredData}
            valueKey="nilai"
            labelKey="provinsi"
            title={`IPM Tahun ${year}`}
          />
        )}
      </main>

      <div
        className="ipm-image-container"
        style={{ backgroundImage: `url(${bgIPM})` }}
      ></div>

      <button className="feedback-button" onClick={() => navigate("/umpan-balik")}>
        UMPAN BALIK
      </button>
    </div>
  );
}
