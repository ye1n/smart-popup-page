import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-[1920px] h-[1080px] border">
      <Outlet />
    </div>
  );
}
