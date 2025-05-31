export default function Background() {
  return (
    <div className="fixed inset-0 z-0 bg-black">
      {/* Rejilla extremadamente sutil */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 0.1px, transparent 0.1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 0.1px, transparent 0.1px)
            `,
          backgroundSize: "50px 50px",
          backgroundPosition: "center center",
        }}
      ></div>

      {/* Micro puntos en los cruces de la rejilla */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0.3px, transparent 0.3px)
            `,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Efecto de borde oscurecido */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-10"></div>
    </div>
  );
}
