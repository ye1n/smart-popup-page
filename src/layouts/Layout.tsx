import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    // 전체 레이아웃에서 세로 가로 스크롤 없어야함, 부분적 스크롤은 필요
    // <div className="w-[1920px] h-screen border-2">
    <Outlet />
    // </div>
  );
}
