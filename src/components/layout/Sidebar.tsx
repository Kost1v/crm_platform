import { LogOut, Hexagon, LayoutDashboard, Building2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

  return (
    <div className="w-1/6 min-w-42 relative bg-[#111827] text-white flex flex-col ">
      <NavLink to="" className="pt-8 flex items-center justify-center gap-2 ">
        <Hexagon className="w-6 h-6 text-blue-500 fill-current" />
        <span className="text-xl font-bold tracking-wide">TruScape</span>
      </NavLink>

      <nav className="mt-20 ml-6 flex flex-col gap-7">
        <NavLink to="/" className="flex">
          <LayoutDashboard />
          <h3 className="pl-4 text-white size-4 font-medium pb-7">Dashboard</h3>
        </NavLink>
        <NavLink to="/companies" className="flex">
          <Building2 />
          <h3 className="pl-4 text-white size-4 font-medium">Companies</h3>
        </NavLink>
      </nav>

      {/* Bottom Area (Exit) */}
      <div className="">
        {/* <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors w-full text-left"> */}
        <button className="flex fixed bottom-6 left-1/16 text-gray-400 hover:text-white transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Exit</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
