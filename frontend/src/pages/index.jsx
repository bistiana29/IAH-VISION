import React from "react";
import "./../style.css";
import { useNavigate } from "react-router-dom";
import bgLanding from "../elements/bg_landingpage.png"; // background image (silhouette people)
import logo from "../elements/logo.png";

export default function LandingPage() {
  const navigate = useNavigate();  // Using navigate hook for programmatic routing

  return (
    <div className="landing-page">
      <aside className="sidebar">
        <div className="logo-title-wrapper">
          <div className="title-with-line">
            <h1>
              <span className="blue-text">INTELLIGENT</span><br />
              <span className="blue-text">ANALYTICS</span><br />
              <span>OF HUMANITY</span>
            </h1>
          </div>
        </div>

        <p className="description">
          Pernahkah Anda membayangkan sebuah peta masa depan bagi kemajuan bangsa? Impian itu menjadi kenyataan. Kami hadir sebagai jembatan antara data historis yang kaya dan wawasan masa depan yang informatif untuk Indeks Pembangunan Manusia (IPM) Indonesia.
        </p>

        <h2 className="welcome-text">Selamat menjelajahi!</h2>

        <div className="copyright">
          &copy; 2025 Intelligent Analytics of Humanity
        </div>

        <button className="feedback-button" onClick={() => navigate("/umpan-balik")}>UMPAN BALIK</button>
      </aside>

      <main className="main-content" style={{ backgroundImage: `url(${bgLanding})` }}>
        <nav className="top-nav">
          {/* Logo di kiri atas */}
          <img src={logo} alt="IAH Logo" className="nav-logo" />
          
          {/* Links for the pages, navbar items can remain */}
          <a href="/" className="nav-link">BERANDA</a>
          <a href="/peta" className="nav-link">PETA</a>
          <a href="/prediksi" className="nav-link">PREDIKSI</a>
        </nav>

        {/* Tombol swipe kiri */}
        <button
          className="btn-swipe-left"
          onClick={() => navigate("/ipm")}
        >
          &lt;&lt;
        </button>

        {/* Empat kartu data di bagian bawah main */}
        <section className="data-cards">
          <div className="card" onClick={() => navigate("/ahh")}>
            <h3>ANGKA HARAPAN HIDUP</h3>
            <img src="/src/elements/icon_ahh.png" alt="Angka Harapan Hidup" />
          </div>
          <div className="card" onClick={() => navigate("/ahs")}>
            <h3>ANGKA HARAPAN SEKOLAH</h3>
            <img src="/src/elements/icon_ahs.png" alt="Angka Harapan Sekolah" />
          </div>
          <div className="card" onClick={() => navigate("/rls")}>
            <h3>RATA-RATA LAMA SEKOLAH</h3>
            <img src="/src/elements/icon_rls.png" alt="Rata-rata Lama Sekolah" />
          </div>
          <div className="card" onClick={() => navigate("/ppk")}>
            <h3>PENGELUARAN PER KAPITA</h3>
            <img src="/src/elements/icon_ppk.png" alt="Pengeluaran Per Kapita" />
          </div>
        </section>
      </main>
    </div>
  );
}
