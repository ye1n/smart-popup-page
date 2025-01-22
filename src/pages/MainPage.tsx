import { useState } from "react";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";

type PopupOptions = {
  route: string;
  width: number;
  height: number;
};

export default function MainPage() {
  const [windowSize, setWindowSize] = useState<number>(0);

  const windowSizeList = [
    { width: 1280, height: 720 },
    { width: 1366, height: 768 },
    { width: 1600, height: 900 },
    { width: 1920, height: 1080 },
  ];

  const openPopup = (options: PopupOptions) => {
    const { route, width, height } = options;

    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    const windowFeatures = `width=${width},height=${height},left=${left},top=${top},scrollbars=no,resizable=no`;
    window.open(route, "_blank", windowFeatures);
  };

  return (
    <div>
      <Dropdown
        width="w-[100px]"
        className="border"
        options={[
          {
            label: "1280 X 720",
            value: 0,
          },
          {
            label: "1366 X 768",
            value: 1,
          },
          {
            label: "1600 X 900",
            value: 2,
          },
          {
            label: "1920 X 1080",
            value: 3,
          },
        ]}
        onChange={(value) => {
          setWindowSize(Number(value));
        }}
      />
      <p>심사원장</p>
      <Button
        label="심사원장"
        onClick={() =>
          openPopup({
            route: "/p1",
            width: windowSizeList[windowSize].width,
            height: windowSizeList[windowSize].height,
          })
        }
      />
      <p>채권원장</p>
    </div>
  );
}
