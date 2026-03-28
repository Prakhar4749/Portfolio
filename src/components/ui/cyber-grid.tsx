export function CyberGrid() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: `radial-gradient(circle, var(--grid-color) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 'var(--grid-opacity)',
        }}
      />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl transition-colors duration-500"
        style={{ background: 'var(--corner-glow-1)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl transition-colors duration-500"
        style={{ background: 'var(--corner-glow-2)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ background: 'var(--corner-glow-2)', opacity: 0.4 }} />
    </div>
  );
}
