import { statsData, salesData, categoriesStats } from "../data/dashboardData";

const Dashboard = () => {
  return (
    <div className="space-y-5 mb-10">
      <header className="flex justify-between items-center border-b border-[#d1d5db] px-10 mb-10">
        <h2 className="font-semibold text-3xl py-7">Dashboard</h2>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-gray-700">Adam Smith</p>
            <p className="text-xs text-gray-500">adamsmith@gmail.com</p>
          </div>
          <img
            src="https://ui-avatars.com/api/?name=Adam+Smith&background=1e1e2d&color=fff"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>

      {/* 2. Top Stats Cards (Gradients) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-10">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className={`h-40 p-6 rounded-2xl shadow-sm bg-linear-to-br ${stat.gradient} flex flex-col justify-between`}
          >
            <div className="flex items-center gap-2">
              <span className="w-4 h-0.5 bg-gray-800/50"></span>
              <span className="text-sm font-normal text-[#111827]">
                {stat.title}
              </span>
            </div>
            <div className="text-6xl font-semibold text-[#111827] tracking-tight ">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* 3. Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mx-10">
        {/* LEFT COLUMN (Change: 2/5 width) */}
        <div className="lg:col-span-2 space-y-8 bg-[#f3f4f6] p-5 rounded-lg">
          {/* Sales Details Table */}
          <h3 className="text-xl font-medium text-gray-800 mb-5">
            Sales details
          </h3>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#1e1e2d] text-white">
                <tr>
                  <th className="py-2 px-4 text-left font-normal text-white text-sm bg-[#111827]">
                    Company
                  </th>
                  <th className="py-2 px-2 text-center font-normal text-sm text-[#111827] bg-[#e9d5ff]">
                    Sold
                  </th>
                  <th className="py-2 px-4 text-center font-normal text-sm text-[#111827] bg-[#d9f99d]">
                    Income
                  </th>
                </tr>
              </thead>
              <tbody>
                {salesData.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-50 hover:bg-blue-50 even:bg-gray-100 transition-colors"
                  >
                    <td className="py-3 pl-5 pr-1">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.logo}
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-gray-700 font-medium text-sm truncate max-w-[150px]">
                          {item.company}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-center text-gray-600 text-sm">
                      {item.sold}
                    </td>
                    <td className="py-3 px-4 text-center font-medium text-gray-800 text-sm">
                      ${item.income}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT COLUMN (Change: 3/5 width) */}
        <div className="lg:col-span-3 bg-[#f3f4f6] rounded-lg p-5">
          <h3 className="text-xl font-medium text-gray-800 mb-5">
            Categories of companies
          </h3>
          {/* Change: grid-cols-4 to fit wider space better */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categoriesStats.map((cat, idx) => (
              <div
                key={idx}
                className="bg-[#1e1e2d] rounded-xl p-5 h-32 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-transform"
              >
                <div className="flex flex-col gap-2">
                  <span className="w-4 h-0.5 bg-white"></span>
                  <span className="text-white text-sm font-normal">
                    {cat.name}
                  </span>
                </div>

                <div className="text-right">
                  <span
                    className={`text-6xl font-semibold tracking-tighter ${
                      idx % 3 === 0
                        ? "text-purple-300"
                        : idx % 3 === 1
                        ? "text-green-300"
                        : "text-blue-300"
                    }`}
                  >
                    {cat.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mx-10">
        {/* Map Section (stays in narrow column) */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-medium text-gray-800 mb-4">
            Countries of companies
          </h2>
          <div className="bg-white rounded-xl shadow-sm h-64 flex items-center justify-center border border-dashed border-gray-300">
            <span className="text-gray-400 text-center px-4">
              Map Visualization
              <br />
              (Compact View)
            </span>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-8 bg-[#f3f4f6] p-5 rounded-lg">
          {/* Sales Details Table */}
          <h3 className="text-xl font-medium text-gray-800 mb-5">Promotions</h3>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#1e1e2d] text-white">
                <tr>
                  <th className="py-4 px-4 text-left font-normal text-white text-sm bg-[#111827]">
                    Company
                  </th>
                  <th className="py-4 px-2 text-center font-normal text-sm text-[#111827] bg-[#e9d5ff]">
                    Name
                  </th>
                  <th className="py-4 px-4 text-center font-normal text-sm text-[#111827] bg-[#d9f99d]">
                    %
                  </th>
                </tr>
              </thead>
              <tbody>
                {salesData.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-50 hover:bg-blue-50 even:bg-gray-100 transition-colors"
                  >
                    <td className="py-3 pl-5 pr-1">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.logo}
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-gray-700 font-medium text-sm truncate max-w-[150px]">
                          {item.company}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-center text-gray-600 text-sm">
                      {item.sold}
                    </td>
                    <td className="py-3 px-4 text-center font-medium text-gray-800 text-sm">
                      ${item.income}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
