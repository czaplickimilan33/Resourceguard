import { ImageResponse } from "next/og";

export const alt = "ResourceGuard — cyfrowe wsparcie w sytuacjach kryzysowych";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#07111F",
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(56,189,248,0.18), transparent 60%), radial-gradient(circle at 90% 100%, rgba(167,139,250,0.15), transparent 60%)",
          color: "#E5E7EB",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            border: "1px solid rgba(56,189,248,0.35)",
            background: "rgba(56,189,248,0.1)",
            color: "#38BDF8",
            borderRadius: "999px",
            padding: "10px 24px",
            fontSize: "24px",
            alignSelf: "flex-start",
          }}
        >
          Projekt wsparcia kryzysowego
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "40px",
            fontSize: "72px",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-2px",
            maxWidth: "1000px",
          }}
        >
          Spokojna pomoc, gdy sytuacja przestaje być spokojna.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "32px",
            fontSize: "30px",
            color: "#94A3B8",
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          Proste instrukcje, pierwsza pomoc, wsparcie psychiczne i tryb offline
          w jednej, przejrzystej aplikacji.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "56px",
            fontSize: "28px",
            fontWeight: 600,
            color: "#38BDF8",
          }}
        >
          ResourceGuard
        </div>
      </div>
    ),
    { ...size }
  );
}
