import { Chart } from "react-google-charts";

const data = [
  ["Lat", "Long", "Name", "Number of orders"],
  [56.1304, -106.3468, "Canada", 2],
  [37.0902, -95.7129, "USA", 2],
  [48.3794, 31.1656, "Ukraine", 2],
  [41.8719, 12.5674, "Italy", 2],
  [40.4637, -3.7492, "Spain", 2],
];

// Дані для списку зліва (легенда)
const countriesStats = [
  { name: "Canada", count: 4, color: "bg-purple-300" },
  { name: "USA", count: 4, color: "bg-purple-300" },
  { name: "Italia", count: 2, color: "bg-purple-200" },
  { name: "Ukraine", count: 2, color: "bg-purple-200" },
  { name: "Spain", count: 2, color: "bg-purple-200" },
];

const World = () => {
  // Налаштування стилів карти, щоб вона виглядала як на макеті
  const options = {
    region: "world",
    displayMode: "markers",
    colorAxis: { colors: ["#22c55e"] },
    backgroundColor: "transparent",
    datalessRegionColor: "#1e1e2d",
    defaultColor: "#1e1e2d",
    legend: "none",
    keepAspectRatio: true,
    tooltip: { textStyle: { color: "#374151" }, showColorCode: false },
    enableRegionInteractivity: true,
    sizeAxis: { minSize: 2, maxSize: 2 },
  };

  return (
    <div className="flex flex-col sm:flex-row h-full w-full">
      {/* 1. Ліва частина - Список країн */}
      <div className="w-full sm:w-1/3 flex flex-col justify-end space-y-2 border-r border-gray-50 sm:border-none">
        {countriesStats.map((country, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${country.color}`}></span>
            <span className="text-[#111827] font-medium text-sm">
              {country.name} - {country.count}
            </span>
          </div>
        ))}
      </div>

      {/* 2. Права частина - Карта Google */}
      <div className="w-full sm:w-2/3 h-full flex items-center justify-center overflow-hidden rounded-r-xl">
        <Chart
          chartType="GeoChart"
          width="100%"
          height="100%"
          data={data}
          options={options}
          loader={<div className="text-sm text-gray-400">Loading Map...</div>}
        />
      </div>
    </div>
  );
};

export default World;
