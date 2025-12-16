import { useState } from "react";
import { X, UploadCloud } from "lucide-react";
import type { Company } from "../../data/mockData";

interface AddCompanyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (newCompany: Company) => void;
}

const AddCompanyModal = ({ isOpen, onClose, onAdd }: AddCompanyModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    status: "",
    joinedDate: "",
    country: "",
    description: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();    

    // Створюємо новий об'єкт компанії
    const newCompany: Company = {
      id: Date.now(), // Генеруємо унікальний ID
      name: formData.name,
      category: formData.category,
      status: formData.status || "Pending",
      promotion: false,
      country: formData.country,
      joinedDate: `${
        formData.joinedDate
          ? formData.joinedDate
          : new Date().toLocaleDateString("en-GB").replaceAll("/", ".")
      }`,
      logo: `https://ui-avatars.com/api/?name=${formData.name}&background=random&color=fff`,
    };

    onAdd(newCompany);
    onClose();
    // Очистка форми
    setFormData({
      name: "",
      category: "",
      status: "",
      joinedDate: "",
      country: "",
      description: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    // Затемнений фон (Overlay)
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-[2px]">
      {/* Біле вікно */}
      <div className="bg-[#f3f4f6] rounded-xl w-[700px] p-7 relative shadow-2xl animate-in fade-in zoom-in duration-200">
        {/* Заголовок + Кнопка закриття */}
        <div className="flex justify-between items-center mb-[42px]">
          <h2 className="text-xl font-semibold text-[#111827]">
            Add new company
          </h2>
          <button
            onClick={onClose}
            className="cursor-pointer hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-7">
            {/* ЛІВА КОЛОНКА */}
            <div className="space-y-5">
              {/* Logo Upload Area */}
              <div className="flex">
                <label className="block text-[#111827] text-[16px] font-normal mb-2">
                  Logo
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-full w-44 h-44 flex flex-col items-center justify-center mx-auto hover:bg-gray-50 transition-colors cursor-pointer group">
                  <div className="bg-gray-900 rounded-full p-2 mb-2 group-hover:bg-gray-700 transition-colors">
                    <UploadCloud className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-500 text-sm font-medium">
                    Upload photo
                  </span>
                </div>
              </div>

              {/* Status */}
              <div>
                <label className="block text-[#111827] text-[16px] font-normal mb-2">
                  Status
                </label>
                <input
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  type="text"
                  placeholder="Active, Pending..."
                  className="w-full border text-[#6b7280] font-normal text-[14px] border-[#d1d5db] rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-[#6b7280] focus:border-transparent transition-all"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-[#111827] text-[16px] font-normal mb-2">
                  Country
                </label>
                <input
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  type="text"
                  placeholder="USA, Ukraine..."
                  className="w-full border text-[#6b7280] font-normal text-[14px] border-[#d1d5db] rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-[#6b7280] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* ПРАВА КОЛОНКА */}
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-[#111827] text-[16px] font-normal mb-2">
                  Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Company name"
                  className="w-full border text-[#6b7280] font-normal text-[14px] border-[#d1d5db] rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-[#6b7280] focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-[#111827] text-[16px] font-normal mb-2">
                  Category
                </label>
                <input
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  type="text"
                  placeholder="IT, Retail..."
                  className="w-full border text-[#6b7280] font-normal text-[14px] border-[#d1d5db] rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-[#6b7280] focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Joined Date */}
              <div>
                <label className="block text-[#111827] text-[16px] font-normal mb-2">
                  Joined date
                </label>
                <input
                  name="joinedDate"
                  value={formData.joinedDate}
                  onChange={handleChange}
                  type="text"
                  placeholder="14.02.2021"
                  className="w-full border text-[#6b7280] font-normal text-[14px] border-[#d1d5db] rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-[#6b7280] focus:border-transparent transition-all"
                  
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-[#111827] text-[16px] font-normal mb-2">
                  Description
                </label>
                <input
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  type="text"
                  placeholder="Short description"
                  className="w-full border text-[#6b7280] font-normal text-[14px] border-[#d1d5db] rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-[#6b7280] focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>

          {/* Кнопка Add Company */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-[#111827] text-white font-medium py-2.5 px-5 rounded-sm hover:bg-gray-800 transition-colors mt-10"
          >
            Add company
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCompanyModal;
