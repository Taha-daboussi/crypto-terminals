import { Link } from "react-router-dom";

const NavItem = ({ to, label, style }) => {
  return (
    <Link className={style} to={to}>
      {label}
    </Link>
  );
};

export default NavItem;
