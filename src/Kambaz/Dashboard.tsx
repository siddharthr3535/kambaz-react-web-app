import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AccountNavigation from "./Account/Navigation";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  console.log("Dashboard", dispatch);
  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        {!isFaculty && (
          <Button
            onClick={() => setEnrolling(!enrolling)}
            className="float-end btn btn-primary"
          >
            {enrolling ? "My Courses" : "All Courses"}
          </Button>
        )}
      </h1>
      <hr />
      <AccountNavigation />

      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            className="mb-2"
            placeholder="Course Name"
          />
          <FormControl
            as="textarea"
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
            rows={3}
            placeholder="Course Description"
          />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <Row xs={1} md={5} className="g-4">
        {courses.map((course) => (
          <Col
            key={course._id}
            className="wd-dashboard-course"
            style={{ width: "300px" }}
          >
            <Card>
              <Link
                to={
                  isFaculty || course.enrolled
                    ? `/Kambaz/Courses/${course._id}/Home`
                    : "#"
                }
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  src={course.imgSource}
                  variant="top"
                  width="100%"
                  height={160}
                />
                <Card.Body className="card-body">
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {enrolling && (
                      <Button
                        className={`btn float-end ${
                          course.enrolled ? "btn-danger" : "btn-success"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          updateEnrollment(course._id, !course.enrolled);
                        }}
                      >
                        {course.enrolled ? "Unenroll" : "Enroll"}
                      </Button>
                    )}
                    {course.name}
                  </Card.Title>
                  <Card.Text
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    {course.description}
                  </Card.Text>

                  {isFaculty && (
                    <div className="d-flex justify-content-start gap-2 mt-3">
                      <Button
                        variant="warning"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setCourse(course);
                        }}
                        id="wd-edit-course-click"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          deleteCourse(course._id);
                        }}
                        id="wd-delete-course-click"
                      >
                        Delete
                      </Button>
                    </div>
                  )}
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
