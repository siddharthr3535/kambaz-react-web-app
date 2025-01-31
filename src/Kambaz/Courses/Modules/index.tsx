import { useState } from "react";

export default function Modules() {
  const [collapsed, setCollapsed] = useState(false);
  const [viewProgress, setViewProgress] = useState(false);

  const handleCollapseAll = () => {
    setCollapsed(!collapsed);
  };

  const handleViewProgress = () => {
    setViewProgress(!viewProgress);
    alert("View Progress clicked!");
  };

  return (
    <div>
      <div className="wd-buttons">
        <button onClick={handleCollapseAll}>
          {collapsed ? "Expand All" : "Collapse All"}
        </button>
        <button onClick={handleViewProgress}>View Progress</button>
        <select>
          <option>Publish all</option>
          <option>Publish module</option>
        </select>
        <button>+ Module</button>
      </div>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">
            Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
          </div>
          {!collapsed && (
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">
                    Introduction to the course
                  </li>
                  <li className="wd-content-item">
                    Learn what is Web Development
                  </li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">
                    Full Stack Developer-Chapter 1-Introduction
                  </li>
                  <li className="wd-content-item">
                    SLLnStack Developer-Chapter 2-Creating Us
                  </li>
                  <li className="wd-content-item">
                    Introduction to Web Development
                  </li>
                  <li className="wd-content-item">
                    Creating an HTTP server with Node.js
                  </li>
                  <li className="wd-content-item">
                    Creating a React Application
                  </li>
                </ul>
              </li>
            </ul>
          )}
        </li>
        <li className="wd-module">
          <div className="wd-title">
            Week 1, Lecture 2 - Formatting User Interfaces with HTML
          </div>
          {!collapsed && (
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">
                    Learn how to create user interfaces with HTML
                  </li>
                  <li className="wd-content-item">
                    Depoly the assignment to Netify
                  </li>
                  <li className="wd-content-item">
                    Introduction to HTML and the DOM
                  </li>
                  <li className="wd-content-item">
                    Formatting Web content with Headings and
                  </li>
                  <li className="wd-content-item">
                    Formatting content with Lists and Tables
                  </li>
                </ul>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
