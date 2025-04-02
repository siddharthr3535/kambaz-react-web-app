import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameter";
import WorkingWithObjects from "./WorkingWithObjects";
import EnvironmentVariables from "./EnvironmentVariables";
import { Link } from "react-router-dom";

export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <div className="list-group">
        <Link to="welcome" className="list-group-item">
          Welcome
        </Link>
      </div>
      <hr />
      <EnvironmentVariables />
      <PathParameters />
      <QueryParameters />
      <WorkingWithObjects />
    </div>
  );
}
