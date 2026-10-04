import { ImageResponse } from "next/og";

// Generated rather than a committed PNG, matching app/icon.tsx: the brand
// colours and wordmark stay in code, so the social card can't drift from the
// design tokens. Next auto-detects this file and emits og:image plus, because
// no twitter-image.tsx exists, twitter:image too. Do NOT also hand-write an
// openGraph.images array in app/layout.tsx - the two would conflict.
//
// Note: next/image does not work inside ImageResponse. Everything here is
// plain markup and inline SVG.

export const alt =
  "Social Catalyst: marketing on autopilot for B2B founders";
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
          justifyContent: "space-between",
          background: "#fbf8f2",
          padding: "72px 80px",
        }}
      >
        {/* wordmark - same two-circle glyph as app/icon.tsx */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="46" height="46" viewBox="0 0 40 40">
            <circle cx="15" cy="14" r="8.5" fill="none" stroke="#1c2b26" strokeWidth="3.6" />
            <circle cx="25" cy="26" r="8.5" fill="none" stroke="#ff5c35" strokeWidth="3.6" />
          </svg>
          <span
            style={{
              marginLeft: 16,
              fontSize: 36,
              fontWeight: 600,
              color: "#1c2b26",
            }}
          >
            Social Catalyst
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#1c2b26",
              maxWidth: 940,
            }}
          >
            Marketing on autopilot for B2B founders.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 27,
              color: "#4c534f",
            }}
          >
            LinkedIn and social, written in your voice · from $149/mo
          </div>
        </div>

        <div
          style={{
            display: "flex",
            height: 10,
            width: 200,
            background: "#ff5c35",
            borderRadius: 5,
          }}
        />
      </div>
    ),
    size,
  );
}
