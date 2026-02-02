export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-12 text-center">
      <div className="max-w-6xl mx-auto space-y-4">
        <p className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-500">
          Leonel González <span className="text-emerald-500 mx-2">/</span>{" "}
          {currentYear}
        </p>
        <p className="text-[9px] font-medium tracking-widest text-zinc-600 uppercase">
          Diseñado y desarrollado con pasión
        </p>
      </div>
    </footer>
  );
}
