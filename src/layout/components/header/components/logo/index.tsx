import { Link } from "react-router-dom";
import { Logo as LogoIcon } from "../../../../../assets/images";

export function Logo() {
  return (
    <Link to="/">
      <img src={LogoIcon} alt="Achille Ciio" />
    </Link>
  );
}
