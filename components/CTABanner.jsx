// components/CTABanner.jsx
"use client";

import Link from "next/link";

export default function CTABanner() {
  return (
    <section style={{ paddingTop: "3rem", paddingBottom: "6rem", textAlign: "center" }}>
      <div style={{ maxWidth: "856px", margin: "0 auto" }}>
        <div
          style={{
            position: "relative",
            background: "linear-gradient(to right, #f59e0b, #ef4444, #f59e0b)",
            color: "#fff",
            borderRadius: "1rem",
            padding: "2.5rem",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-1.25rem",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "2rem",
            }}
          >
            ✨
          </div>

          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: "800",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              letterSpacing: "0.02em",
            }}
          >
            🔒 Lock & Earn Big! 💰
          </h2>

          <div
            style={{
              backgroundColor: "#facc15",
              color: "#78350f",
              fontSize: "1.875rem",
              fontWeight: "700",
              padding: "0.75rem 2.5rem",
              borderRadius: "0.5rem",
              border: "2px solid #ca8a04",
              margin: "0 auto",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              maxWidth: "fit-content",
            }}
          >
            🚀 ADAO Staking is Live!
          </div>

          <p
            style={{
              fontSize: "1.125rem",
              marginTop: "1.5rem",
              fontWeight: "500",
              lineHeight: "1.75",
            }}
          >
            Earn passive rewards by staking ADAO. The longer you stake, the{" "}
            <span style={{ fontWeight: "700", color: "#fde68a" }}>bigger the rewards!</span>
          </p>

          <div style={{ marginTop: "1.5rem" }}>
            <Link
              href="https://agentdao.com/staking"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "1rem 2rem",
                backgroundColor: "#fff",
                color: "#ca8a04",
                fontWeight: "800",
                fontSize: "1.25rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#ca8a04";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
                e.currentTarget.style.color = "#ca8a04";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              💎 Stake & Earn Now!
            </Link>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "1.25rem",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "2rem",
            }}
          >
            ✨
          </div>
        </div>
      </div>
    </section>
  );
}
