import { Route, Routes, } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Companies from "./pages/Companies";
import Layout from "./components/layout/Layout";

function App() {

  return (
    <div className="flex flex-row">
      <Layout />
      <main className="w-5/6 min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="companies" element={<Companies />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
