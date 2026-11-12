import { Link } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return <Link to={to}>{label}</Link>;
};

export default NavItem;
