'use client';

export default function Loading() {
  return (
    <div style={{
      width: '100%',
      height: '3px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: '#f97316', // Orange color from Tailwind's orange-500
        animation: 'loader-bar 1.5s linear infinite',
        transformOrigin: 'left',
      }}></div>
      <style jsx>{`
        @keyframes loader-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
