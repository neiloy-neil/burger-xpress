import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1B3D8F",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "22%",
        }}
      >
        <div
          style={{
            color: "#F5A020",
            fontSize: 96,
            fontWeight: 900,
            fontFamily: "Arial Black, Impact, sans-serif",
            letterSpacing: "-3px",
          }}
        >
          BX
        </div>
      </div>
    ),
    size
  );
}
