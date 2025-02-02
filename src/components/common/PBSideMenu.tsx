import { useState } from "react";
import PBIcon from "../PBIcon";

type Props = {
  data: Array<{
    activeIcon: any;
    inactiveIcon: any;
    label: string;
    width: number;
  }>;
};

const PBSideMenu: React.FC<Props> = ({ data }) => {
  const [selectedSideMenu, setSelectedSideMenu] = useState(0);

  return (
    <div className="shadow-lg w-20 h-fit bg-pb-custom-white py-[10px] rounded-b-lg">
      <div className="flex flex-col divide-y border-y border-pb-custom-btn-line divide-pb-custom-btn-line">
        {data.map((item, index) => (
          <div key={index} className="w-20">
            <button
              key={index}
              className={`w-full flex flex-col items-center justify-center rounded-lg h-[56px] ${
                selectedSideMenu === index
                  ? "bg-pb-custom-secondary shadow-inner text-pb-custom-white"
                  : "bg-pb-custom-white text-pb-custom-black"
              }`}
              onClick={() => setSelectedSideMenu(index)}
            >
              {item.activeIcon && item.inactiveIcon && (
                <PBIcon
                  icon={
                    selectedSideMenu === index
                      ? item.activeIcon
                      : item.inactiveIcon
                  }
                  width={item.width}
                  height={20}
                />
              )}
              <p className="text-xs whitespace-pre-wrap">{item.label}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PBSideMenu;
