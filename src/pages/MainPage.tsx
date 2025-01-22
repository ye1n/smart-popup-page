import { useState } from "react";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Label from "../components/Label";

export default function MainPage() {
  const [windowSize, setWindowSize] = useState<number>(0);

  const windowSizeList = [
    { width: 1280, height: 720 },
    { width: 1366, height: 768 },
    { width: 1600, height: 900 },
    { width: 1920, height: 1080 },
  ];

  const openPopup = (route: string) => {
    const width = windowSizeList[windowSize].width;
    const height = windowSizeList[windowSize].height;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    const windowFeatures = `width=${width},height=${height},left=${left},top=${top},scrollbars=no,resizable=no`;
    window.open(route, "_blank", windowFeatures);
  };

  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex items-center gap-2">
        <p className="text-xs font-medium">해상도</p>
        <Dropdown
          align="center"
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
      </div>
      <div className="flex flex-col gap-1">
        <Label label="심사원장" />
        <Button
          className="w-fit"
          label="smartsb_심사원장"
          onClick={() => openPopup("/s")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label label="콜원장" />
        <Button
          className="w-fit"
          label="smartsb_콜원장"
          onClick={() => openPopup("/c")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label label="채권원장" />
        <Button
          className="w-fit"
          label="smartsb_채권원장_1920"
          onClick={() => openPopup("/ch1")}
        />
        <Button
          className="w-fit"
          label="smartsb_채권원장_1240_온라인조회_Atype"
          onClick={() => openPopup("/ch2")}
        />
        <Button
          className="w-fit"
          label="smartsb_채권원장_1240_사고관리"
          onClick={() => openPopup("/ch3")}
        />
      </div>
    </div>
  );
}
