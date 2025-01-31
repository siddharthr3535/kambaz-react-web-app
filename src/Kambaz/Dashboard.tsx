import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="images/reactjs.png" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack Software Developer
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/5678/Home"
            className="wd-dashboard-course-link"
          >
            <img src="images/nodejs.png" width={200} />
            <div>
              <h5>CS5678 Node JS</h5>
              <p className="wd-dashboard-course-title">
                Backend Development Essentials
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/9101/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/angular.png" width={200} />
            <div>
              <h5>CS9101 Angular</h5>
              <p className="wd-dashboard-course-title">
                Frontend Framework Mastery
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1123/Home"
            className="wd-dashboard-course-link"
          >
            <img src="images/python.png" width={200} />
            <div>
              <h5>CS1123 Python Programming</h5>
              <p className="wd-dashboard-course-title">
                Programming Foundations
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1415/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/java.png" width={200} />
            <div>
              <h5>CS1415 Java Fundamentals</h5>
              <p className="wd-dashboard-course-title">
                Object-Oriented Programming
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1617/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/htmlcss.png" width={200} />
            <div>
              <h5>CS1617 HTML & CSS</h5>
              <p className="wd-dashboard-course-title">Web Design Basics</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1819/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/mongodb.png" width={200} />
            <div>
              <h5>CS1819 MongoDB</h5>
              <p className="wd-dashboard-course-title">
                NoSQL Database Management
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/2021/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/devops.png" width={200} />
            <div>
              <h5>CS2021 DevOps</h5>
              <p className="wd-dashboard-course-title">CI/CD & Deployment</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
