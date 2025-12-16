export interface StatData {
  title: string;
  value: string;
  gradient: string;
}
export const statsData: StatData[] = [
  {
    title: "Total promotions",
    value: "432",
    gradient: "from-purple-100 to-pink-100",
  },
  {
    title: "Total category",
    value: "8",
    gradient: "from-purple-100 to-green-100",
  },
  {
    title: "New companies",
    value: "28",
    gradient: "from-green-100 to-yellow-100",
  },
  {
    title: "Total active companies",
    value: "670",
    gradient: "from-blue-100 to-green-100",
  },
];
export interface SalesData {
  id: number;
  company: string;  
  sold: number;
  income: number;
  category: string;
  interest: string;
  logo: string;
}

export const salesData: SalesData[] = [
  {
    id: 1,
    company: "Costco Wholesale",
    sold: 459,
    income: 705,
    category: "Products",
    interest: "-32%",
    logo: "https://ui-avatars.com/api/?name=Costco+Wholesale&background=0D8ABC&color=fff",
  },
  {
    id: 2,
    company: "Adobe Systems",
    sold: 142,
    income: 230,
    category: "IT",
    interest: "21%",
    logo: "https://ui-avatars.com/api/?name=Adobe+Wholesale&background=FF0000&color=fff",
  },
  {
    id: 3,
    company: "Gusto Green",
    sold: 84,
    income: 192,
    category: "Products",
    interest: "-14%",
    logo: "https://ui-avatars.com/api/?name=Gusto+Wholesale&background=22c55e&color=fff",
  },
  {
    id: 4,
    company: "Tech Solutions",
    sold: 49,
    income: 115,
    category: "IT",
    interest: "-27%",
    logo: "https://ui-avatars.com/api/?name=Tech+Solutions&background=6366f1&color=fff",
  },
  {
    id: 5,
    company: "Netflix Inc.",
    sold: 41,
    income: 96,
    category: "Media",
    interest: "33%",
    logo: "https://ui-avatars.com/api/?name=Netflix+Inc&background=E50914&color=fff",
  },
];
export interface CategoryStat {
  name: string;
  count: number;
}
export const categoriesStats = [
  { name: "Products", count: 4 },
  { name: "Media", count: 8 },
  { name: "IT", count: 26 },
  { name: "Educations", count: 1 },
  { name: "Electronics", count: 37 },
  { name: "Clothes", count: 22 },
  { name: "Food", count: 4 },
  { name: "Auto", count: 12 },
];
