export default function LoadingScreen({ visible }) {
  return (
    <div className={`fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-2 border-orange/20 animate-spin" style={{borderTopColor:"#E8630A"}} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full gradient-orange animate-pulse-ring" />
        </div>
      </div>
      <span className="font-display text-3xl font-bold text-white mt-6">Keyani</span>
      <span className="text-[10px] tracking-[0.5em] uppercase text-orange font-bold mt-1">Restaurant</span>
    </div>
  );
}
