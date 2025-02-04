import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { LiaBookSolid } from "react-icons/lia";
export default function KambazNavigation() {
  const { pathname } = useLocation();
  return (
    <div
      id="wd-Kambaz-navigation"
      style={{ width: 120 }}
      className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" />
      </a>
      <Link
        to="/Kambaz/Account"
        id="wd-account-link"
        className={`list-group-item text-center border-0  ${
          pathname.includes("Account")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <FaRegCircleUser
          className={`fs-1 ${
            pathname.includes("Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account{" "}
      </Link>
      <Link
        to="/Kambaz/Dashboard"
        id="wd-dashboard-link"
        className={`list-group-item text-center border-0  ${
          pathname.includes("Dashboard")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard{" "}
      </Link>
      <Link
        to="/Kambaz/Courses/1234/home"
        id="wd-course-link"
        className={`list-group-item text-center border-0  ${
          pathname.includes("Courses")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses{" "}
      </Link>
      <Link
        to="/Kambaz/Calendar"
        id="wd-course-link"
        className={`list-group-item text-center border-0  ${
          pathname.includes("Calendar")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar{" "}
      </Link>
      <Link
        to="/Kambaz/Inbox"
        id="wd-course-link"
        className={`list-group-item text-center border-0  ${
          pathname.includes("Inbox")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox{" "}
      </Link>
      <Link
        to="/Kambaz/Labs"
        id="wd-course-link"
        className={`list-group-item text-center border-0  ${
          pathname.includes("Labs")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <FaGear className="fs-1 text-danger" />
        <br />
        Labs{" "}
      </Link>
    </div>
  );
}
