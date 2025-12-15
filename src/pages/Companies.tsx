import { useState } from "react";
import { Search } from "lucide-react";
import CompanyTable from "../components/companies/CompanyTable";
import { companies } from "../data/mockData";

const Companies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between px-10 border-b border-[#d1d5db]">
        <h2 className="font-semibold text-3xl py-7">Companies</h2>
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
      <section className="flex justify-between items-center px-10">
        <div className="relative w-114">
          <input
            type="text"
            className="border border-[#d1d5db] rounded-lg py-3 pl-3 pr-10 h-11 w-full focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-gray-400"
            placeholder="Search.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        <button
          type="button"
          className="border border-[#d1d5db] rounded-l rounded-r py-2.5 px-5 h-11 w-37 text-white bg-[#111827] justify-center items-center flex ml-auto"
        >
          Add company
        </button>
      </section>

      {filteredCompanies.length > 0 ? (
        // 4. Передаємо ВІДФІЛЬТРОВАНИЙ список
        <CompanyTable companies={filteredCompanies} />
      ) : (
        <div className="text-center py-10 text-gray-500">
          No companies found matching "{searchQuery}"
        </div>
      )}
    </div>
  );
};

export default Companies;
