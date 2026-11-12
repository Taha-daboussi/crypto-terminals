import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="d-flex flex-wrap justify-content-between align-items-center gap-2 p-4 bg-light shadow-sm mb-4">
      <h4 className="mb-0">Crypto Terminals</h4>
      <div className="d-flex flex-wrap gap-2">
        <NavItem to="/" label="Home" />
        <NavItem to="/Features" label="Features" />
        <NavItem to="/Companies" label="Companies" />
        <NavItem to="/Compare" label="Compare" />
        <NavItem to="/Contact" label="Contact" />
        <NavItem to="/About" label="About" />
      </div>
    </nav>
  );
};

export default Navbar;
