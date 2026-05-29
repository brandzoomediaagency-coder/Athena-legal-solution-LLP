import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #061A2B 0%, #0a2a44 100%)',
          color: '#E5C158',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
          borderRadius: 36,
          border: '5px solid #C8A21A',
        }}
      >
        <div style={{ fontSize: 128, fontWeight: 700, lineHeight: 1, marginTop: 4 }}>A</div>
        <div
          style={{
            marginTop: 4,
            fontSize: 14,
            letterSpacing: 6,
            fontFamily: 'system-ui, sans-serif',
            color: '#C8A21A',
            fontWeight: 600,
          }}
        >
          LLP
        </div>
      </div>
    ),
    { ...size }
  );
}
