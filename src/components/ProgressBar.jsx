export default function ProgressBar({ pct }) {
  return (
    <>
      <div className="progress-bar fixed top-0 left-0 right-0 h-[3px] bg-borda z-50">
        <div
          className="h-full bg-verde-c transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="no-print fixed top-2.5 right-4 z-50 text-[11px] text-verde-c tracking-wide bg-white px-3 py-1 rounded-full border border-borda">
        {pct}% preenchido
      </div>
    </>
  )
}
