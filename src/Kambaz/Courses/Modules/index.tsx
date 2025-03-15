import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useState } from "react";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import { FormControl } from "react-bootstrap";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");

  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div id="wd-modules">
      {/* Render add module controls only for faculty */}
      {isFaculty && (
        <ModulesControls
          setModuleName={setModuleName}
          moduleName={moduleName}
          addModule={() => {
            dispatch(addModule({ name: moduleName, course: cid }));
            setModuleName("");
          }}
        />
      )}
      <div>
        <ul id="wd-modules" className="list-group rounded-0">
          {modules
            .filter((module: any) => module.course === cid)
            .map((module: any) => (
              <li
                key={module._id}
                className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
              >
                <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                  <div
                    className="d-flex align-items-center flex-grow-1"
                    style={{ minWidth: 0 }}
                  >
                    <BsGripVertical className="me-2 fs-3" />
                    {/* If not editing, simply display the module name */}
                    {!module.editing && (
                      <span className="module-name text-truncate">
                        {module.name}
                      </span>
                    )}
                    {/* Allow inline editing only for faculty */}
                    {module.editing && isFaculty && (
                      <FormControl
                        className="w-50 d-inline-block"
                        onChange={(e) =>
                          dispatch(
                            updateModule({ ...module, name: e.target.value })
                          )
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            dispatch(
                              updateModule({ ...module, editing: false })
                            );
                          }
                        }}
                        defaultValue={module.name}
                      />
                    )}
                  </div>
                  {/* Show module control buttons only for faculty */}
                  {isFaculty && (
                    <div
                      className="module-controls d-flex align-items-center ms-3"
                      style={{ flexShrink: 0 }}
                    >
                      <ModuleControlButtons
                        moduleId={module._id}
                        deleteModule={(moduleId) =>
                          dispatch(deleteModule(moduleId))
                        }
                        editModule={(moduleId) =>
                          dispatch(editModule(moduleId))
                        }
                      />
                    </div>
                  )}
                </div>
                {module.lessons && (
                  <ul className="wd-lessons list-group rounded-0">
                    {module.lessons.map((lesson: any) => (
                      <li
                        key={lesson._id}
                        className="wd-lesson list-group-item p-3 ps-1"
                      >
                        <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                        <LessonControlButtons />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
