import React from "react";
import LineChartPrediksi from "../components/linechartprediksi";  // Import the LineChartPrediksi component
import { useNavigate } from "react-router-dom";
import logo from "../elements/logo.png"; // Logo for Navbar

export default function Prediksi() {
  const navigate = useNavigate();
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
        <h1 className="ipm-title">PREDIKSI IPM TAHUN 2025-2026</h1>
        <p className="ipm-description">
          Di bawah ini, Anda dapat melihat grafik yang memvisualisasikan perkembangan IPM dari tahun 2010 hingga 2024, termasuk prediksi nilai IPM untuk tahun 2025 dan 2026.
        </p>

        {/* Line Chart for Prediksi */}
        <LineChartPrediksi />
      </main>

      {/* Feedback Button */}
      <button className="feedback-button" onClick={() => navigate("/umpan-balik")}>UMPAN BALIK</button>
    </div>
  );
}
