import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[15rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <SideBar />
      <main className="overflow-y-scroll bg-gray-50 p-5">
        <div className="mx-auto flex min-w-[55rem] max-w-[70rem] flex-col gap-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
