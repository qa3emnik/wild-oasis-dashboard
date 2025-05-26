import { Route, BrowserRouter, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import Users from "./pages/Users";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="account" element={<Account />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="cabins" element={<Cabins />} />
        <Route path="login" element={<Login />} />
        <Route path="pageNotFound" element={<PageNotFound />} />
        <Route path="settings" element={<Settings />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}
