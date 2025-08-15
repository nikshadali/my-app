// src/pages/NotFoundPage.jsx
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "96px",
          fontWeight: "bold",
          color: "var(--primary-color)",
          margin: "0",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "600",
          marginTop: "10px",
           color: "var(--primary-color)",
        }}
      >
        Oops! Page not found
      </h2>
      <p
        style={{
          marginTop: "8px",
          maxWidth: "400px",
          color: "#6c757d",
          lineHeight: "1.5",
        }}
      >
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          backgroundColor: "var(--secondary-color)",
          color: "#fff",
          fontWeight: "500",
          borderRadius: "8px",
          textDecoration: "none",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "var(--secondary-color)")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "var(--secondary-color)")}
      >
        Back to Home
      </Link>
    </div>
  );
}
