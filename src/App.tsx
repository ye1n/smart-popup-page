import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import Page1 from "./pages/s/Page1";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* 메인 */}
        <Route path="/" element={<MainPage />} />

        {/* 심사원장 */}
        <Route path="/s" element={<Page1 />} />

        {/* 콜원장 */}
        <Route path="/c" element={<></>} />

        {/* 채권원장 */}
        <Route path="/ch1" element={<></>} />
        <Route path="/ch2" element={<></>} />
        <Route path="/ch3" element={<></>} />
      </Route>
    </Routes>
  );
}

export default App;
