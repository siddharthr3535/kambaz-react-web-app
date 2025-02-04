import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./Account";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import Dashboard from "./Dashboard";

export default function Kambaz() {
  return (
    <div id="wd-kambaz" className="d-flex">
      <div className="d-none d-md-block">
        <KambazNavigation />
      </div>
      <div className="wd-main-content-offset p-3 flex-grow-1 me-4">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Courses/:cid/*" element={<Courses />} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}
