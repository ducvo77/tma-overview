import Menu from "./Menu";

function Header() {
  return (
    <header className="flex items-center px-20 h-20 border-b-2 bg-slate-300 fixed top-0 left-0 right-0">
      <Menu />
    </header>
  );
}

export default Header;
