import { Navigate, Route, Routes, useParams } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import Labs from "../Labs";
import * as db from "./Database";
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useSelector } from "react-redux";
export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const { currentUser } = useSelector((state: any) => state.accountReducer); // 👈 Add this

  const [course, setCourse] = useState<any>({
    _id: "RS101",
    name: "Rocket Propulsion",
    number: "RS4550",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });
  const addNewCourse = () => {
    setCourses([
      ...courses,
      { ...course, _id: "RS101", imgSource: "/images/webdev.png" },
    ]);
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  const { cid } = useParams();
  console.log(cid);
  return (
    <div id="wd-Kambaz" className="d-flex">
      <div className="d-none d-md-block">
        <KambazNavigation />
      </div>
      <div className="wd-main-content-offset p-3 flex-grow-1 me-4">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Courses"
            element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Courses/:cid/*"
            element={
              <ProtectedRoute>
                <Courses courses={courses} />
              </ProtectedRoute>
            }
          />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
          <Route path="/Labs" element={<Labs />} />
        </Routes>
      </div>
    </div>
  );
}
