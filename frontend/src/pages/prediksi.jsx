import React, { useEffect, useState } from "react";
import LineChartComponent from "../components/LineChartComponent";
import { useNavigate } from "react-router-dom";
import { getPrediksiProvinsi } from "../services/api";
import logo from "../elements/logo.png";
import "../styles/chart.css";

export default function Prediksi() {
  const navigate = useNavigate();
  const [selectedProvinsi, setSelectedProvinsi] = useState("indonesia");
  const [data, setData] = useState(null);

  const provinsiList = [
   "indonesia","aceh",
  "bali",
  "banten",
  "bengkulu",
  "dki jakarta",
  "gorontalo",
  "jambi",
  "jawa barat",
  "jawa tengah",
  "jawa timur",
  "kalimantan barat",
  "kalimantan selatan",
  "kalimantan tengah",
  "kep. bangka belitung",
  "kep. riau",
  "lampung",
  "maluku",
  "maluku utara",
  "nusa tenggara barat",
  "nusa tenggara timur",
  "papua",
  "riau",
  "sulawesi barat",
  "sulawesi selatan",
  "sulawesi tengah",
  "sulawesi tenggara",
  "sulawesi utara",
  "sumatera barat",
  "sumatera selatan",
  "sumatera utara",
  "di yogyakarta"

  ];

  useEffect(() => {
    if (selectedProvinsi) {
      fetchData(selectedProvinsi);
    }
  }, [selectedProvinsi]);

  const fetchData = async (prov) => {
    try {
      const result = await getPrediksiProvinsi(prov);
      setData(result.data);
    } catch (error) {
      console.error("Failed to load data:", error);
    }
  };

  const extractData = (obj) => {
    const years = Object.keys(obj).map((y) => parseInt(y));
    const sortedYears = [...new Set(years)].sort((a, b) => a - b);
    const actual = sortedYears
      .filter((y) => y <= 2024)
      .map((y) => obj[y] ?? null);
    const predicted = sortedYears
      .filter((y) => y > 2024)
      .map((y) => obj[y] ?? null);
    return { actualData: [...actual, ...Array(predicted.length).fill(null)], predictedData: [...Array(actual.length).fill(null), ...predicted] };
  };

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

      <main className="predict-main-content" style={{ backgroundColor: "#64b5f6" }}>
        <h1 className="ipm-title">PREDIKSI INDIKATOR IPM</h1>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="provinsi">Pilih Wilayah: </label>
          <select
            id="provinsi"
            value={selectedProvinsi}
            onChange={(e) => setSelectedProvinsi(e.target.value)}
          >
            {provinsiList.map((prov) => (
              <option key={prov} value={prov}>
                {prov.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {data && (
          <div className="grid-container">
            <div className="chart-box">
              <LineChartComponent
                title="Angka Harapan Hidup"
                label="AHH"
                {...extractData(data.ahh)}
                color={{ actual: "#6baed6", predicted: "#08519c" }}
              />
            </div>
            <div className="chart-box">
              <LineChartComponent
                title="Angka Harapan Sekolah"
                label="AHS"
                {...extractData(data.ahs)}
                color={{ actual: "#fdae6b", predicted: "#e6550d" }}
              />
            </div>
            <div className="chart-box">
              <LineChartComponent
                title="Rata-rata Lama Sekolah"
                label="RLS"
                {...extractData(data.rls)}
                color={{ actual: "#74c476", predicted: "#238b45" }}
              />
            </div>
            <div className="chart-box">
              <LineChartComponent
                title="Pengeluaran per Kapita"
                label="PPK (juta rupiah)"
                {...extractData(data.ppk)}
                color={{ actual: "#fc9272", predicted: "#cb181d" }}
              />
            </div>
          </div>
        )}

        {data && (
          <div className="chart-full">
            <LineChartComponent
              title="Indeks Pembangunan Manusia"
              label="IPM"
              {...extractData(data.ipm)}
              color={{ actual: "#bcbddc", predicted: "#6a51a3" }}
            />
          </div>
        )}
      </main>

      <button className="feedback-button" onClick={() => navigate("/umpan-balik")}>
        UMPAN BALIK
      </button>
    </div>
  );
}
