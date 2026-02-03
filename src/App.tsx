import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";

import MapView from "./components/charts/MapView";



import Papa from "papaparse";

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import KPICard from "./components/kpi/KPICard";
import Filters from "./components/filters/Filters";

import YearTrend from "./components/charts/YearTrend";
import TopMakesBar from "./components/charts/TopMakesBar";
import EVTypePie from "./components/charts/EVTypePie";
import TopCitiesBar from "./components/charts/TopCitiesBar";
import RangeByMake from "./components/charts/RangeByMake";
import FuelEligibilityDonut from "./components/charts/FuelEligibilityDonut";

interface EVRecord {
  County: string;
  City: string;
  State: string;
  "Model Year": string;
  Make: string;
  Model: string;
  "Electric Vehicle Type": string;
  "Electric Range": string;
  "Clean Alternative Fuel Vehicle (CAFV) Eligibility": string;
}

function App() {
  const [data, setData] = useState<EVRecord[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const [selectedMake, setSelectedMake] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [yearRange, setYearRange] = useState<[number, number]>([2010, 2025]);

  // Load CSV
  useEffect(() => {
    Papa.parse<EVRecord>("/ev_data.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const cleaned = result.data.filter((d) => d["Model Year"]);
        setData(cleaned);
      },
    });
  }, []);

  // Unique filter values
  const makes = useMemo(
    () => [...new Set(data.map((d) => d.Make))].filter(Boolean),
    [data]
  );

  const exportCSV = () => {
  const headers = Object.keys(filteredData[0] || {}).join(",");

  const rows = filteredData
    .map((row) => Object.values(row).join(","))
    .join("\n");

  const csvContent = headers + "\n" + rows;

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  saveAs(blob, "filtered_ev_data.csv");
};


  const cities = useMemo(
    () => [...new Set(data.map((d) => d.City))].filter(Boolean),
    [data]
  );

  const types = useMemo(
    () =>
      [...new Set(data.map((d) => d["Electric Vehicle Type"]))].filter(Boolean),
    [data]
  );

  // Apply Filters
  const filteredData = useMemo(() => {
    return data.filter((d) => {
      const year = Number(d["Model Year"]);
      return (
        (!selectedMake || d.Make === selectedMake) &&
        (!selectedCity || d.City === selectedCity) &&
        (!selectedType || d["Electric Vehicle Type"] === selectedType) &&
        year >= yearRange[0] &&
        year <= yearRange[1]
      );
    });
  }, [data, selectedMake, selectedCity, selectedType, yearRange]);

  // KPI Data
  const totalVehicles = filteredData.length;

  const avgRange = useMemo(() => {
    const ranges = filteredData
      .map((d) => Number(d["Electric Range"]))
      .filter((r) => !isNaN(r));

    if (!ranges.length) return 0;

    return Math.round(ranges.reduce((a, b) => a + b, 0) / ranges.length);
  }, [filteredData]);

  // Year Growth
  const yearData = useMemo(() => {
    const map: Record<string, number> = {};

    filteredData.forEach((d) => {
      const year = d["Model Year"];
      map[year] = (map[year] || 0) + 1;
    });

    return Object.keys(map)
      .map((year) => ({ year, count: map[year] }))
      .sort((a, b) => Number(a.year) - Number(b.year));
  }, [filteredData]);

  // Top N Generic
  const getTopN = (key: string, n = 10) => {
    const map: Record<string, number> = {};

    filteredData.forEach((d: any) => {
      const value = d[key];
      if (!value) return;
      map[value] = (map[value] || 0) + 1;
    });

    return Object.entries(map)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, n);
  };

  const makeData = useMemo(() => getTopN("Make"), [filteredData]);
  const cityData = useMemo(() => getTopN("City"), [filteredData]);

  // EV Type Distribution
  const evTypeData = useMemo(() => {
    const map: Record<string, number> = {};

    filteredData.forEach((d) => {
      const type = d["Electric Vehicle Type"];
      map[type] = (map[type] || 0) + 1;
    });

    return Object.entries(map).map(([name, value]) => ({
      name,
      value,
    }));
  }, [filteredData]);

  // Fuel Eligibility
  const fuelData = useMemo(() => {
    const map: Record<string, number> = {};

    filteredData.forEach((d) => {
      const val = d["Clean Alternative Fuel Vehicle (CAFV) Eligibility"];
      map[val] = (map[val] || 0) + 1;
    });

    return Object.entries(map).map(([name, value]) => ({
      name,
      value,
    }));
  }, [filteredData]);

  // 🔥 Average Range by Make (FIXED PROPERLY)
  const rangeData = useMemo(() => {
    const map: Record<string, { total: number; count: number }> = {};

    filteredData.forEach((d) => {
      const make = d.Make;
      const range = Number(d["Electric Range"]);

      if (!make || isNaN(range)) return;

      if (!map[make]) {
        map[make] = { total: 0, count: 0 };
      }

      map[make].total += range;
      map[make].count += 1;
    });

    return Object.entries(map)
      .map(([name, v]) => ({
        name,
        avgRange: Math.round(v.total / v.count),
      }))
      .sort((a, b) => b.avgRange - a.avgRange)
      .slice(0, 10);
  }, [filteredData]);

  // Welcome Screen
  if (showWelcome) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold">Welcome to EV Analytics 🚗⚡</h1>
          <button
            onClick={() => setShowWelcome(false)}
            className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:scale-105 transition"
          >
            Enter Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 transition">
        <Sidebar />

        <div className="flex-1 ml-64 ml-sm-0 flex flex-col">
         <Header
  darkMode={darkMode}
  setDarkMode={setDarkMode}
  onExport={exportCSV}
/>


          <main className="flex-1 overflow-y-auto">
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="max-w-7xl mx-auto px-6 py-8 space-y-10"
>

              <div id="overview">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <KPICard title="Total Registered EVs" value={totalVehicles} />
                  <KPICard
                    title="Average Electric Range"
                    value={avgRange}
                    suffix=" mi"
                  />
                  <KPICard title="Manufacturers Active" value={makes.length} />
                  <KPICard title="Cities Covered" value={cities.length} />
                </div>
              </div>

              <Filters
                makes={makes}
                cities={cities}
                types={types}
                selectedMake={selectedMake}
                selectedCity={selectedCity}
                selectedType={selectedType}
                yearRange={yearRange}
                setSelectedMake={setSelectedMake}
                setSelectedCity={setSelectedCity}
                setSelectedType={setSelectedType}
                setYearRange={setYearRange}
              />

              <div id="growth">
                <YearTrend data={yearData} />
              </div>

              <div id="manufacturers">
                <TopMakesBar data={makeData} />
              </div>

              <div id="cities">
                <TopCitiesBar data={cityData} />
              </div>

              <div id="types">
                <EVTypePie data={evTypeData} />
              </div>

              <div id="range" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <RangeByMake data={rangeData} />
                <FuelEligibilityDonut data={fuelData} />
              </div>

              <div id="map">
  <MapView data={filteredData} />
</div>

            </motion.div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
