import { NavLink } from "./components/navLink";
import { Logo } from "./components/logo";

const navLinks = [
  { text: "Search", path: "/search" },
  { text: "Communities", path: "/communities" },
  { text: "Quick Move-ins", path: "/quick-move-ins" },
  { text: "Open Houses", path: "/open-houses" },
  { text: "About", path: "/about" },
  { text: "Contact", path: "/contact" },
];

export function Header() {
  return (
    <header className="h-20 flex justify-between items-center px-[60px] bg-white">
      <div className="flex items-center gap-[75px] grow">
        {/*Logo*/}
        <Logo />

        {/*Navigation*/}
        <nav className="grow">
          <ul className="flex items-center gap-7">
            {navLinks.map(({ text, path }, index) => (
              <li
                key={text}
                className={
                  index === navLinks.length - 1 ? "flex grow justify-end" : ""
                }
              >
                <NavLink text={text} path={path} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
