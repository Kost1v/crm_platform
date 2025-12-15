import { Check, X } from "lucide-react";
import type { Company } from "../../data/mockData";

interface CompanyTableProps {
  companies: Company[];
}

const CompanyTable = ({ companies }: CompanyTableProps) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Not active":
        return "bg-red-100 text-red-700";
      case "Pending":
        return "bg-orange-100 text-orange-700";
      case "Suspended":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Products":
        return "text-orange-400";
      case "IT":
        return "text-purple-500";
      case "Media":
        return "text-pink-500";
      case "Auto":
        return "text-blue-500";
      case "Electronics":
        return "text-green-500";
      default:
        return "text-gray-600";
    }
  };
  return (
    <div className="overflow-x-auto bg-gray-100 px-10 pb-14">
      <table className="w-full">
        {/* Заголовок таблиці */}
        <thead>
          <tr className="text-left text-gray-500 text-sm border-b border-gray-100">
            <th className="py-5 font-medium">Category</th>
            <th className="py-5 font-medium">Company</th>
            <th className="py-5 font-medium flex justify-center">Status</th>
            <th className="py-5 font-medium">Promotion</th>
            <th className="py-5 font-medium flex justify-center">Country</th>
            <th className="py-5 font-medium ">Joined date</th>
          </tr>
        </thead>

        {/* Тіло таблиці */}
        <tbody className="space-y-4">
          {companies.map((company) => (
            <tr
              key={company.id}
              className=" bg-white hover:bg-gray-50 transition-colors border-b-4 border-gray-50 last:border-none "
            >
              <td
                className={`py-4 pl-4 relative`}
              >
                {/* Кольорова лінія зліва */}
                <div
                  className={`absolute left-0 top-3 bottom-3 w-1 rounded-r ${getCategoryColor(
                    company.category
                  ).replace("text-", "bg-")}`}
                ></div>
                <span
                  className={`font-medium ${getCategoryColor(
                    company.category
                  )}`}
                >
                  {company.category}
                </span>
              </td>

              {/* Company Logo + Name */}
              <td className="py-4">
                <div className="flex items-center gap-3">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-semibold text-gray-800">
                    {company.name}
                  </span>
                </div>
              </td>

              {/* Status Badge */}
              <td className="py-4 m-auto flex justify-center">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(
                    company.status
                  )}`}
                >
                  • {company.status}
                </span>
              </td>

              {/* Promotion (Yes/No with Icons) */}
              <td className="py-4 ">
                <div className="flex items-center gap-2">
                  {company.promotion ? (
                    <>
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-green-700 text-sm font-medium">
                        Yes
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                        <X className="w-3 h-3 text-red-600" />
                      </div>
                      <span className="text-red-700 text-sm font-medium">
                        No
                      </span>
                    </>
                  )}
                </div>
              </td>

              {/* Country */}
              <td className="py-4 text-gray-700 font-medium flex justify-center">
                {company.country}
              </td>

              {/* Joined Date */}
              <td className="py-4 text-gray-700">{company.joinedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;
// import { Check, X } from "lucide-react";
// import type { Company } from "../../data/mockData";

// interface CompanyTableProps {
//   companies: Company[];
// }

// const CompanyTable = ({ companies }: CompanyTableProps) => {
//   // Функція для кольорів статусів (як на макеті)
//   const getStatusStyles = (status: string) => {
//     switch (status) {
//       case "Active":
//         return "bg-green-100 text-green-700";
//       case "Not active":
//         return "bg-red-100 text-red-700";
//       case "Pending":
//         return "bg-orange-100 text-orange-700";
//       case "Suspended":
//         return "bg-blue-100 text-blue-700";
//       default:
//         return "bg-gray-100 text-gray-700";
//     }
//   };

//   // Функція для кольору категорії (перша колонка)
//   const getCategoryColor = (category: string) => {
//     switch (category) {
//       case "Products":
//         return "text-orange-400";
//       case "IT":
//         return "text-purple-500";
//       case "Media":
//         return "text-pink-500";
//       case "Auto":
//         return "text-blue-500";
//       case "Retail":
//         return "text-green-500";
//       default:
//         return "text-gray-600";
//     }
//   };

//   return (
//     <div className="w-full mt-8">
//       <ul className="flex justify-between">
//         <li className="pb-4 font-medium">Category</li>
//         <li className="pb-4 font-medium">Company</li>
//         <li className="pb-4 font-medium">Status</li>
//         <li className="pb-4 font-medium">Promotion</li>
//         <li className="pb-4 font-medium">Country</li>
//         <li className="pb-4 font-medium">Joined date</li>
//       </ul>

//       {/* Тіло таблиці */}
//       <ul className="space-y-4 flex flex-col justify-center ">
//         {companies.map((company) => (
//           <li
//             key={company.id}
//             className="flex justify-between  items-center bg-white hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-none"
//           >
//             {/* Category (з кольоровою смужкою зліва, як на макеті) */}
//             <span className="relative">
//               {/* Кольорова лінія зліва */}
//               <div
//                 className={`absolute left-0 top-3 bottom-3 w-1 rounded-r ${getCategoryColor(
//                   company.category
//                 ).replace("text-", "bg-")}`}
//               ></div>
//               <span
//                 className={`font-medium ${getCategoryColor(company.category)}`}
//               >
//                 {company.category}
//               </span>
//             </span>

//             {/* Company Logo + Name */}
//             <span className="py-4">
//               <div className="flex items-center gap-3">
//                 <img
//                   src={company.logo}
//                   alt={company.name}
//                   className="w-8 h-8 rounded-full"
//                 />
//                 <span className="font-semibold text-gray-800">
//                   {company.name}
//                 </span>
//               </div>
//             </span>

//             {/* Status Badge */}
//             <span className="py-4">
//               <span
//                 className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(
//                   company.status
//                 )}`}
//               >
//                 • {company.status}
//               </span>
//             </span>

//             {/* Promotion (Yes/No with Icons) */}
//             <td className="py-4">
//               <div className="flex items-center gap-2">
//                 {company.promotion ? (
//                   <>
//                     <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
//                       <Check className="w-3 h-3 text-green-600" />
//                     </div>
//                     <span className="text-green-700 text-sm font-medium">
//                       Yes
//                     </span>
//                   </>
//                 ) : (
//                   <>
//                     <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
//                       <X className="w-3 h-3 text-red-600" />
//                     </div>
//                     <span className="text-red-700 text-sm font-medium">No</span>
//                   </>
//                 )}
//               </div>
//             </td>

//             {/* Country */}
//             <td className="py-4 text-gray-700 font-medium">
//               {company.country}
//             </td>

//             {/* Joined Date */}
//             <td className="py-4 text-gray-700">{company.joinedDate}</td>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CompanyTable;
