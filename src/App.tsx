import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import Page1 from "./pages/s/p1/Page1";
import Page2 from "./pages/s/p2/Page2";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* 메인 */}
        <Route path="/" element={<MainPage />} />

        {/* 심사원장 */}
        <Route path="/s-p1" element={<Page1 />} />
        <Route path="/s-p2" element={<Page2 />} />
        <Route path="/s-p3" element={<></>} />
        <Route path="/s-p4" element={<></>} />
        <Route path="/s-p5" element={<></>} />
        <Route path="/s-p6" element={<></>} />

        {/* 채권원장 */}
        <Route path="/c-p1" element={<></>} />
        <Route path="/c-p2" element={<></>} />
        <Route path="/c-p3" element={<></>} />
      </Route>
    </Routes>
  );
}

export default App;
