export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div>
        <label htmlFor="wd-name">Assignment Name</label>
        <br />
        <input id="wd-name" value="A1 - ENV + HTML" />
      </div>
      <br />

      <div>
        <textarea
          id="wd-description"
          rows={10}
          cols={50}
          defaultValue={
            "The assignment is available online. Submit a link to the landing page " +
            "of your Web application running on Netlify. The landing page should " +
            "include the following: Your full name and section Links to each of the " +
            "lab assignments Link to the Kambaz application Links to all relevant " +
            "source code repositories. The Kambaz application should include a link " +
            "to navigate back to the landing page."
          }
        ></textarea>
      </div>
      <br />

      <table>
        <tbody>
          <tr>
            <td align="right">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" defaultValue={100} />
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECTS</option>
              </select>
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option>Percentage</option>
                <option>Points</option>
                <option>Letter Grade</option>
              </select>
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
                <option>On Paper</option>
              </select>
              <br />
              <br />
              <div>
                Online Entry Options
                <br />
                <label htmlFor="wd-text-entry">
                  <input id="wd-text-entry" type="checkbox" /> Text Entry
                </label>
                <br />
                <label htmlFor="wd-website-url">
                  <input id="wd-website-url" type="checkbox" /> Website URL
                </label>
                <br />
                <label htmlFor="wd-media-recordings">
                  <input id="wd-media-recordings" type="checkbox" /> Media
                  Recordings
                </label>
                <br />
                <label htmlFor="wd-student-annotation">
                  <input id="wd-student-annotation" type="checkbox" /> Student
                  Annotation
                </label>
                <br />
                <label htmlFor="wd-file-upload">
                  <input id="wd-file-upload" type="checkbox" /> File Uploads
                </label>
              </div>
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
              Assign to
              <br />
              <input id="wd-assign-to" defaultValue="Everyone" />
            </td>
          </tr>
          <br />
          <tr>
            <td></td>
            <td>
              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
            </td>
          </tr>
          <br></br>
          <tr>
            <td></td>
            <table>
              <tr>
                <td>
                  <label htmlFor="wd-available-from">Available from</label>
                </td>
                <td>
                  <label htmlFor="wd-available-until"> Until </label>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    id="wd-available-from"
                    type="date"
                    defaultValue="2024-05-06"
                  />
                </td>
                <td>
                  <input
                    id="wd-available-until"
                    type="date"
                    defaultValue="2024-05-20"
                  />
                </td>
              </tr>
            </table>
          </tr>
          <tr>
            <td colSpan={2}>
              <hr />
            </td>
          </tr>
          <tr>
            <td align="right" colSpan={2}>
              <button>Cancel</button>
              <button>Save</button>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>
  );
}
