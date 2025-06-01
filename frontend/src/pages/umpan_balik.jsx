import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";

export default function UmpanBalik() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    setResponseMsg("");

    const payload = {
      nama: form.name,
      email: form.email,
      umpan_balik: form.message,
    };

    try {
      const res = await fetch("http://localhost:8000/api/umpan-balik", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || "Gagal mengirim umpan balik");
      }

      setSuccess(true);
      setResponseMsg(data.message || "Umpan balik berhasil dikirim.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.message || "Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "#303030",
        minHeight: "100vh",
        color: "white",
        p: 4,
        maxWidth: 400,
        mx: "auto",
      }}
    >
      <Button
        variant="outlined"
        sx={{ mb: 3 }}
        onClick={() => navigate(-1)}
        disabled={loading}
      >
        &larr; Kembali
      </Button>

      <Typography variant="h4" gutterBottom>
        Umpan Balik
      </Typography>

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {responseMsg}
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {!success && (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nama"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            inputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "lightgray" } }}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            inputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "lightgray" } }}
          />

          <TextField
            label="Pesan"
            name="message"
            value={form.message}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={5}
            margin="normal"
            inputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "lightgray" } }}
          />

          <Box sx={{ position: "relative", mt: 3 }}>
            <Button
              variant="contained"
              type="submit"
              disabled={loading}
              fullWidth
              sx={{ bgcolor: "#445a8b" }}
            >
              Kirim
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  color: "white",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            )}
          </Box>
        </form>
      )}
    </Box>
  );
}