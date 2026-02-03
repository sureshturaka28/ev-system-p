import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("overview");

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const Item = ({ label, id }: { label: string; id: string }) => (
    <div
      onClick={() => scrollTo(id)}
      className={`px-4 py-2 rounded-lg cursor-pointer transition ${
        active === id
          ? "bg-blue-600 text-white"
          : "hover:bg-gray-800"
      }`}
    >
      {label}
    </div>
  );

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-gray-900 text-gray-300 hidden md:flex flex-col">
      <div className="p-6 font-bold text-white border-b border-gray-700">
        ⚡ EV Dashboard
      </div>

      <nav className="flex-1 p-4 space-y-3 overflow-y-auto">
        <Item label="Overview" id="overview" />
        <Item label="Growth Trends" id="growth" />
        <Item label="Manufacturers" id="manufacturers" />
        <Item label="Cities" id="cities" />
        <Item label="Technology Split" id="types" />
        <Item label="Range & Policy" id="range" />
        <Item label="Map View" id="map" />
      </nav>
    </aside>
  );
};

export default Sidebar;
