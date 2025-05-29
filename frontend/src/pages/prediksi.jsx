import React from "react";
import LineChartComponent from "../components/LineChartComponent";
import { useNavigate } from "react-router-dom";
import logo from "../elements/logo.png";
import "../styles/chart.css"; // Assuming styling is in chart.css

export default function Prediksi() {
  const navigate = useNavigate();

  const sampleYears = 17;
  const dummy = (val) => Array(sampleYears).fill(val);
  const empty = Array(15).fill(null);

  return (
    <div className="ipm-page">
      <nav className="top-nav">
        <img src={logo} alt="IAH Logo" className="nav-logo" />
        <a href="/" className="nav-link">BERANDA</a>
        <a href="/peta" className="nav-link">PETA</a>
        <a href="/prediksi" className="nav-link">PREDIKSI</a>
      </nav>

      <main className="predict-main-content" style={{ backgroundColor: "#64b5f6" }}>
        <h1 className="ipm-title">PREDIKSI INDIKATOR IPM</h1>

        <div className="grid-container">
          <div className="chart-box">
            <LineChartComponent
              title="Angka Harapan Hidup"
              label="AHH"
              actualData={[...dummy(70), null, null]}
              predictedData={[...empty, 72, 73]}
              color={{ actual: "#1e88e5", predicted: "#e53935" }}
            />
          </div>
          <div className="chart-box">
            <LineChartComponent
              title="Angka Harapan Sekolah"
              label="AHS"
              actualData={[...dummy(12), null, null]}
              predictedData={[...empty, 13, 13.2]}
              color={{ actual: "#43a047", predicted: "#fb8c00" }}
            />
          </div>
          <div className="chart-box">
            <LineChartComponent
              title="Rata-rata Lama Sekolah"
              label="RLS"
              actualData={[...dummy(8), null, null]}
              predictedData={[...empty, 8.5, 8.7]}
              color={{ actual: "#5e35b1", predicted: "#fdd835" }}
            />
          </div>
          <div className="chart-box">
            <LineChartComponent
              title="Pengeluaran per Kapita"
              label="PPK (juta rupiah)"
              actualData={[...dummy(11), null, null]}
              predictedData={[...empty, 12, 13]}
              color={{ actual: "#00acc1", predicted: "#8e24aa" }}
            />
          </div>
        </div>

        <div className="chart-full">
          <LineChartComponent
            title="Indeks Pembangunan Manusia"
            label="IPM"
            actualData={[67.09, 67.2, 67.4, 68.0, 68.2, 68.5, 68.9, 69.1, 69.5, 69.8, 70.1, 70.5, 70.8, 71.2, 71.5, null, null]}
            predictedData={[...empty, 72.5, 73]}
            color={{ actual: "#0d47a1", predicted: "#ff1744" }}
          />
        </div>
      </main>

      <button className="feedback-button" onClick={() => navigate("/umpan-balik")}>UMPAN BALIK</button>
    </div>
  );
}
