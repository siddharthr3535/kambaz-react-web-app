export default function Assignments() {
    return (
      <div id="wd-assignments">
        {/* Search and Action Buttons */}
        <div className="wd-actions">
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
          />
          <button id="wd-add-assignment-group">+ Group</button>
          <button id="wd-add-assignment">+ Assignment</button>
        </div>
        
        {/* Assignments Title */}
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        
        {/* Assignment List */}
        <ul id="wd-assignment-list">
          {/* Assignment Item 1 */}
          <li className="wd-assignment-list-item">
            <a
              href="#/Kambaz/Courses/1234/Assignments/123"
              className="wd-assignment-link"
            >
              A1 - ENV + HTML
            </a>
            <div className="wd-assignment-details">
              Multiple Modules | <b>Not available until May 6 at 12:00am</b> |
              <b> Due May 13 at 11:59pm</b> | 100 pts
            </div>
          </li>
  
          {/* Assignment Item 2 */}
          <li className="wd-assignment-list-item">
            <a
              href="#/Kambaz/Courses/1234/Assignments/124"
              className="wd-assignment-link"
            >
              A2 - CSS + BOOTSTRAP
            </a>
            <div className="wd-assignment-details">
              Multiple Modules | <b>Not available until May 13 at 12:00am</b> |
              <b> Due May 20 at 11:59pm</b> | 100 pts
            </div>
          </li>
  
          {/* Assignment Item 3 */}
          <li className="wd-assignment-list-item">
            <a
              href="#/Kambaz/Courses/1234/Assignments/125"
              className="wd-assignment-link"
            >
              A3 - JAVASCRIPT + REACT
            </a>
            <div className="wd-assignment-details">
              Multiple Modules | <b>Not available until May 20 at 12:00am</b> |
              <b> Due May 27 at 11:59pm</b> | 100 pts
            </div>
          </li>
        </ul>
      </div>
    );
  }
  