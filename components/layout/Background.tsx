export default function Background() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-black/95"></div>
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 0.5px, transparent 0.5px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 0.5px, transparent 0.5px)
          `,
          backgroundSize: "60px 60px",
          filter: "blur(0.2px)",
        }}
      ></div>
      <div
        className="absolute inset-0 opacity-1"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.015) 0.3px, transparent 0.3px)
          `,
          backgroundSize: "15px 15px",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80"></div>
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  );
}
