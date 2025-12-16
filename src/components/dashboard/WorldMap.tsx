// Дані для точок на карті (Latitude, Longitude, Label)

import Chart from "react-google-charts";

// Ми використовуємо координати центрів країн або столиць
const data = [
  ["Lat", "Long", "Name"],
  [56.1304, -106.3468, "Canada"], // Канада
  [37.0902, -95.7129, "USA"], // США
  [48.3794, 31.1656, "Ukraine"], // Україна
  [41.8719, 12.5674, "Italy"], // Італія
  [40.4637, -3.7492, "Spain"], // Іспанія
  [-25.2744, 133.7751, "Australia"], // Австралія
];

// Дані для списку зліва (легенда)
const countriesStats = [
  { name: "Canada", count: 4, color: "bg-purple-300" },
  { name: "USA", count: 4, color: "bg-purple-300" },
  { name: "Italia", count: 2, color: "bg-purple-200" },
  { name: "Ukraine", count: 2, color: "bg-purple-200" },
  { name: "Spain", count: 2, color: "bg-purple-200" },
];

const WorldMap = () => {
  // Налаштування стилів карти, щоб вона виглядала як на макеті
  const options = {
    region: "world",
    displayMode: "markers", // Режим точок (маркерів)
    colorAxis: { colors: ["#d9f99d", "#bef264"] }, // Колір точок (лаймовий/зелений)
    backgroundColor: "transparent", // Прозорий фон
    datalessRegionColor: "#1e1e2d", // Колір країн (темно-сірий, як на макеті)
    defaultColor: "#1e1e2d", // Запасний колір
    legend: "none", // Ховаємо стандартну легенду Google
    keepAspectRatio: true,
    tooltip: { textStyle: { color: "#374151" }, showColorCode: false },
    // Прибираємо зайві елементи інтерфейсу
    enableRegionInteractivity: true,
    sizeAxis: { minSize: 6, maxSize: 6 }, // Розмір точок
  };

  return (
    <div className="flex flex-col sm:flex-row h-full w-full lg:col-span-2 bg-[#f3f4f6] rounded-lg p-5">
      {/* 1. Ліва частина - Список країн */}
      <div className="w-full sm:w-1/3 flex justify-between flex-col space-y-4 border-r border-gray-50 sm:border-none">
        <h3 className="text-xl font-medium text-gray-800">
          Countries of companies
        </h3>
        <div className="space-y-2">
          {countriesStats.map((country, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className={`w-2 h-2 rounded-full ${country.color}`}></span>
              <span className="text-gray-600 font-medium text-sm">
                {country.name} - {country.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Права частина - Карта Google */}
      <div className="w-full sm:w-2/3 h-full flex items-center justify-center overflow-hidden rounded-r-xl">
        <Chart
          chartType="GeoChart"
          width="100%"
          height="100%" // Розтягуємо на всю висоту контейнера
          data={data}
          options={options}
          // Показуємо спінер поки карта вантажиться
          loader={<div className="text-sm text-gray-400">Loading Map...</div>}
        />
      </div>
    </div>
  );
};

export default WorldMap;
