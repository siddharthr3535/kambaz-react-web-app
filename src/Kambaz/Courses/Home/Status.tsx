import Modules from "../Modules";
import { Route } from "react-router-dom";

<Route path="Modules" element={<Modules />} />;
export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <button>Unpublish</button> <button>Publish</button>
      <br />
      <br />
      <button>View Course Notifications</button>
      <br />
      <button>Import from Commons</button>
      <br />
      <button>Choose from Homepage</button>
      <br />
      <button>View course Stream</button>
      <br />
      <button>New Announcement</button>
      <br />
      <button>New analytics</button>
      <br />
      <button>View Course Notifications</button>
    </div>
  );
}
