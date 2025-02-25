import PBButton from "../components/PBButton";
import PBLabel from "../components/PBLabel";

export default function MainPage() {
  const openPopup = (width: number, height: number, route: string) => {
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    const windowFeatures = `width=${width},height=${height},left=${left},top=${top},scrollbars=no,resizable=no`;
    window.open(route, "_blank", windowFeatures);
  };

  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex flex-col gap-1">
        <PBLabel label="심사원장" />
        <PBButton
          className="w-fit"
          label="smartsb_심사원장_1920*1080"
          onClick={() => openPopup(1920, 1080, "/s")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <PBLabel label="콜원장" />
        <PBButton
          className="w-fit"
          label="smartsb_콜원장_1920*1080"
          onClick={() => openPopup(1920, 1080, "/c")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <PBLabel label="채권원장" />
        <PBButton
          className="w-fit"
          label="smartsb_채권원장_1920*1080"
          onClick={() => openPopup(1920, 1080, "/ch1")}
        />
        <PBButton
          className="w-fit"
          label="smartsb_채권원장_1280*860_온라인조회_Atype"
          onClick={() => openPopup(1280, 860, "/ch2")}
        />
        <PBButton
          className="w-fit"
          label="smartsb_채권원장_1280*860_사고관리"
          onClick={() => openPopup(1280, 860, "/ch3")}
        />
      </div>
    </div>
  );
}
