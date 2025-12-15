export interface Company {
  id: number;
  name: string;
  category: string;
  status: 'Active' | 'Not active' | 'Pending' | 'Suspended' | string;
  promotion: boolean;
  country: string;
  joinedDate: string;
  logo: string;
}

export const companies: Company[] = [
  {
    id: 1,
    name: "Costco Wholesale",
    category: "Products",
    status: "Active",
    promotion: true,
    country: "USA",
    joinedDate: "19.02.2023",
    logo: "https://ui-avatars.com/api/?name=Costco+Wholesale&background=0D8ABC&color=fff",
  },
  {
    id: 2,
    name: "Adobe Systems",
    category: "IT",
    status: "Not active",
    promotion: false,
    country: "USA",
    joinedDate: "24.03.2023",
    logo: "https://ui-avatars.com/api/?name=Adobe+Systems&background=FF0000&color=fff",
  },
  {
    id: 3,
    name: "Gusto Green",
    category: "Products",
    status: "Pending",
    promotion: true,
    country: "Canada",
    joinedDate: "10.04.2023",
    logo: "https://ui-avatars.com/api/?name=Gusto+Green&background=22c55e&color=fff",
  },
  {
    id: 4,
    name: "Tech Solutions",
    category: "IT",
    status: "Suspended",
    promotion: false,
    country: "UK",
    joinedDate: "12.01.2023",
    logo: "https://ui-avatars.com/api/?name=Tech+Solutions&background=6366f1&color=fff",
  },
  {
    id: 5,
    name: "Netflix Inc.",
    category: "Media",
    status: "Active",
    promotion: true,
    country: "USA",
    joinedDate: "05.05.2023",
    logo: "https://ui-avatars.com/api/?name=Netflix&background=E50914&color=fff",
  },
  {
    id: 6,
    name: "SoftServe",
    category: "IT",
    status: "Active",
    promotion: true,
    country: "Ukraine",
    joinedDate: "15.08.2022",
    logo: "https://ui-avatars.com/api/?name=SoftServe&background=111827&color=fff",
  },
  {
    id: 7,
    name: "BMW Group",
    category: "Auto",
    status: "Pending",
    promotion: false,
    country: "Germany",
    joinedDate: "30.11.2023",
    logo: "https://ui-avatars.com/api/?name=BMW&background=0066b1&color=fff",
  },
  {
    id: 8,
    name: "McDonald's",
    category: "Food",
    status: "Not active",
    promotion: false,
    country: "USA",
    joinedDate: "11.02.2023",
    logo: "https://ui-avatars.com/api/?name=McDonalds&background=ffc72c&color=000",
  },
  {
    id: 9,
    name: "Samsung Elec",
    category: "Electronics",
    status: "Suspended",
    promotion: true,
    country: "Korea",
    joinedDate: "01.06.2023",
    logo: "https://ui-avatars.com/api/?name=Samsung&background=1428a0&color=fff",
  },
  {
    id: 10,
    name: "Rozetka",
    category: "Electronics",
    status: "Active",
    promotion: true,
    country: "Ukraine",
    joinedDate: "14.07.2023",
    logo: "https://ui-avatars.com/api/?name=Rozetka&background=00a046&color=fff",
  },
];