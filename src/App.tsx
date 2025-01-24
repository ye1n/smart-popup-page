import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import MainPage from "./pages/MainPage";
import S from "./pages/s/S";
import C from "./pages/c/C";
import Ch01 from "./pages/ch/Ch01";
import Ch02 from "./pages/ch/ch02/Ch02";
import Ch03 from "./pages/ch/Ch03";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* 메인 */}
        <Route path="/" element={<MainPage />} />

        {/* 심사원장 */}
        <Route path="/s" element={<S />} />

        {/* 콜원장 */}
        <Route path="/c" element={<C />} />

        {/* 채권원장 */}
        <Route path="/ch1" element={<Ch01 />} />
        <Route path="/ch2" element={<Ch02 />} />
        <Route path="/ch3" element={<Ch03 />} />
      </Route>
    </Routes>
  );
}

export default App;
