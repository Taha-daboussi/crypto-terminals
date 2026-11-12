import NavItem from "./NavItem";

const Navbar = () => {
  const linkStyle =
    "rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-emerald-400";

  return (
    <nav className="z-10 bg-slate-900 shadow-lg md:sticky md:top-0">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <h4 className="flex items-center gap-2 text-xl font-bold text-white">
          <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-400"></span>
          Crypto Terminals
        </h4>
        <div className="flex flex-wrap gap-1">
          <NavItem style={linkStyle} to="/" label="Home" />
          <NavItem style={linkStyle} to="/Features" label="Features" />
          <NavItem style={linkStyle} to="/Companies" label="Companies" />
          <NavItem style={linkStyle} to="/Compare" label="Compare" />
          <NavItem style={linkStyle} to="/Contact" label="Contact" />
          <NavItem style={linkStyle} to="/About" label="About" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
