import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1B3D8F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20%",
          position: "relative",
        }}
      >
        {/* Orange flame shape */}
        <div
          style={{
            position: "absolute",
            top: 90,
            left: "50%",
            transform: "translateX(-50%)",
            width: 80,
            height: 110,
            background:
              "radial-gradient(ellipse at 50% 100%, #F5A020 40%, #FF6B00 100%)",
            borderRadius: "50% 50% 20% 20% / 60% 60% 30% 30%",
            filter: "blur(2px)",
          }}
        />
        {/* BX text */}
        <div
          style={{
            color: "#FFFFFF",
            fontSize: 220,
            fontWeight: 900,
            fontFamily: "Arial Black, Impact, sans-serif",
            lineHeight: 1,
            marginTop: 60,
            letterSpacing: "-8px",
          }}
        >
          BX
        </div>
        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 70,
            left: 60,
            right: 60,
            height: 8,
            background: "#F5A020",
            borderRadius: 4,
          }}
        />
      </div>
    ),
    size
  );
}
