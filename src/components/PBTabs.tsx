import React from "react";

type Props = {
  tabs: Tab[];
  className?: string;
  width?: number;
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  onClick?: () => void;
};

export type Tab = {
  id: string;
  label: string;
};

const PBTabs: React.FC<Props> = ({
  tabs,
  className = "",
  width,
  activeTab,
  setActiveTab,
  onClick,
}) => {
  return (
    <div
      className={`flex w-fit h-[26px] rounded overflow-hidden divide-x divide-pb-custom-white ${className}`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            setActiveTab(tab);
            onClick && onClick();
          }}
          className={`text-xs px-2 text-center h-full ${
            activeTab.id === tab.id
              ? "text-pb-custom-white font-bold bg-pb-custom-primary"
              : "text-pb-custom-black font-normal bg-pb-custom-form-bg shadow-inner"
          }`}
          style={{
            width: width ? `${width}px` : "84px",
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default PBTabs;
