export default function Button({ children, variant = "solid", as = "button", className = "", ...props }) {
  const Component = as;
  const base = "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 font-body font-bold text-sm tracking-wide uppercase rounded-xl transition-all duration-300 overflow-hidden group";
  const variants = {
    solid: "gradient-orange text-white shadow-orange-md hover:shadow-orange-lg hover:-translate-y-0.5 active:scale-[0.98]",
    outline: "border-2 border-orange text-orange bg-transparent hover:bg-orange hover:text-white hover:shadow-orange-sm hover:-translate-y-0.5",
    dark: "bg-bg-card border border-white/10 text-white hover:border-orange/40 hover:-translate-y-0.5",
    ghost: "text-orange bg-orange/8 border border-orange/15 hover:bg-orange/15 hover:-translate-y-0.5",
  };
  return (
    <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
      {variant === "solid" && <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />}
      {children}
    </Component>
  );
}
