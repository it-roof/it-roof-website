export function BackgroundElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-96 h-96 bg-white/2 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-white/1 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-white/2 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-64 h-64 bg-white/1 rounded-full blur-2xl"></div>
    </div>
  )
}
