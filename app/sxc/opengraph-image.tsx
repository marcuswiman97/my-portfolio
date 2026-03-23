import { readFileSync } from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Stockholm Xperience Conference case study preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  const svg = readFileSync(
    path.join(process.cwd(), "public/images/mw_header_logo_white 2.svg"),
    "utf8",
  );
  const logoSrc = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "radial-gradient(circle at top center, rgba(255,255,255,0.06), transparent 32%), linear-gradient(180deg, #0e1111, #121616)",
          color: "#e6e8e8",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: -6,
          }}
        >
          <img
            src={logoSrc}
            alt=""
            width={120}
            height={40}
            style={{ display: "block" }}
          />
          <div
            style={{
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#a7b0b0",
            }}
          >
            Case Study
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 920 }}>
          <div
            style={{
              fontSize: 74,
              lineHeight: 0.98,
              fontWeight: 700,
              letterSpacing: -3,
            }}
          >
            Stockholm Xperience Conference
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.35, color: "#bcc4c4", maxWidth: 760 }}>
            A mobile-first concept for a hybrid UX conference experience.
          </div>
        </div>

        <div style={{ fontSize: 22, color: "#6faf8f" }}>
          UX/UI Design + Research
        </div>
      </div>
    ),
    size,
  );
}
