import { Link } from "react-router-dom";
export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <div className="wd-sem-title mb-3 ms-3 me-3">2025 Spring Semester.</div>
      <Link
        to="/Kambaz/Courses/1234/Home"
        id="wd-course-home-link"
        className="list-group-item active border border-0"
      >
        {" "}
        Home{" "}
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Modules"
        id="wd-course-modules-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Modules{" "}
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Piazza"
        id="wd-course-piazza-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Piazza{" "}
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Zoom"
        id="wd-course-zoom-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Zoom{" "}
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Assignments"
        id="wd-course-quizzes-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Assignments{" "}
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Quizzes"
        id="wd-course-assignments-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Quizzes{" "}
      </Link>
      <Link
        to="/Kambaz/Courses/1234/People"
        id="wd-course-people-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        People{" "}
      </Link>
    </div>
  );
}
