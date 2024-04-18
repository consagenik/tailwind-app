import { Link, useMatch } from "react-router-dom";

interface NavLinkProps {
  text: string;
  path: string;
}

export function NavLink({ text, path }: NavLinkProps) {
  const match = useMatch(path);

  return (
    <Link
      to={path}
      className={`h-12 flex flex-col justify-center px-[2px] relative after:w-full after:h-[2px] after:absolute after:left-0 after:bottom-0 after:rounded-[1px] after:bg-customBlack ${Boolean(match) ? "after:scale-100" : "after:scale-0"} after:transition-transform hover:bg-slate-50 transition-colors`}
    >
      <span className="text-[16px] leading-[19px]">{text}</span>
    </Link>
  );
}
