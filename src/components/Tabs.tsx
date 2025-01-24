import React from "react";

type Props = {
  tabs: Tab[];
  className?: string;
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  onClick?: () => void;
};

export type Tab = {
  id: string;
  label: string;
};

const Tabs: React.FC<Props> = ({
  tabs,
  className = "",
  activeTab,
  setActiveTab,
  onClick,
}) => {
  return (
    <div
      className={`flex h-[26px] rounded overflow-hidden divide-x divide-custom-white ${className}`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            setActiveTab(tab);
            onClick && onClick();
          }}
          className={`text-xs px-2 text-center w-[84px] h-full ${
            activeTab.id === tab.id
              ? "text-custom-white font-bold bg-custom-primary"
              : "text-custom-black font-normal bg-custom-form-bg shadow-inner"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
