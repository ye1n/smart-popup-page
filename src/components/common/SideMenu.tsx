import { useState } from "react";
import Icon from "../Icon";

type Props = {
  data: Array<{
    activeIcon: any;
    inactiveIcon: any;
    label: string;
    width: string;
  }>;
};

const SideMenu: React.FC<Props> = ({ data }) => {
  const [selectedSideMenu, setSelectedSideMenu] = useState(0);

  return (
    <div className="shadow-lg w-20 h-fit bg-custom-white py-[10px] rounded-b-lg">
      <div className="flex flex-col divide-y border-y border-custom-btn-line divide-custom-btn-line">
        {data.map((item, index) => (
          <div key={index} className="w-20">
            <button
              key={index}
              className={`w-full flex flex-col items-center justify-center rounded-lg h-[56px] transition ${
                selectedSideMenu === index
                  ? "bg-custom-secondary shadow-inner text-custom-white"
                  : "bg-custom-white text-custom-black"
              }`}
              onClick={() => setSelectedSideMenu(index)}
            >
              {item.activeIcon && item.inactiveIcon && (
                <Icon
                  icon={
                    selectedSideMenu === index
                      ? item.activeIcon
                      : item.inactiveIcon
                  }
                  width={item.width}
                  height="20"
                  className="text-custom-white"
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

export default SideMenu;
