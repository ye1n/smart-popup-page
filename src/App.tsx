import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import Page1 from "./pages/p1/Page1";
import Page2 from "./pages/p2/Page2";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* 메인 */}
        <Route path="/" element={<MainPage />} />
        {/* 심사원장 */}
        <Route path="/p1" element={<Page1 />} />
        {/* 채권원장 */}
        <Route path="/p2" element={<Page2 />} />
      </Route>
    </Routes>
  );
}

export default App;
