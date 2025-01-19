import React, { useState } from "react";

type Props = {
  tabs: Tab[];
  className?: string;
};

type Tab = {
  id: string;
  label: string;
};

const Tabs: React.FC<Props> = ({ tabs, className = "" }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  return (
    <div
      className={`flex h-[26px] rounded overflow-hidden divide-x divide-custom-white ${className}`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`text-xs py-1.5 px-2 text-center transition-colors w-[84px] h-full ${
            activeTab === tab.id
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
