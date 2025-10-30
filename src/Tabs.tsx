"use client";
import React, { useState } from "react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode; // can be any large JSX or component
}
export const  tabData = [
    { id: "overview", label: "Overview", content: <h1>anan1</h1> },
    { id: "analytics", label: "Analytics", content:<h1>anan2</h1> },
    { id: "products", label: "Products", content: <h1>anan3</h1> },
    { id: "settings", label: "Settings", content: <h1>anan4</h1> },
  ];

const Tabs: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id); // default first tab

  return (
    <div className="w-full">
      {/* Tab Header */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="p-3 bg-black rounded-md shadow-sm">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;