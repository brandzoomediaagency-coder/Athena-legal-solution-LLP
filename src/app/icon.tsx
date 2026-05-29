import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#061A2B',
          color: '#E5C158',
          fontSize: 22,
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
          borderRadius: 6,
          border: '1.5px solid #C8A21A',
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
