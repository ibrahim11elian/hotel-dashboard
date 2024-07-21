import Logo from "./Logo";
import MainNav from "./MainNav";

function SideBar() {
  return (
    <aside className="row-[1/-1] border-r bg-white px-4 py-2">
      <Logo />
      <MainNav />
    </aside>
  );
}

export default SideBar;
