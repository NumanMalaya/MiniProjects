import { useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList/ToDoList";
import StopWatch from "./StopWatch/StopWatch";
import Button from "./ToDoList/Button";
import SearchTable from "./SearchTable/SearchTable";


function App() {
  const [project, setProject] = useState("ToDoList");
  return (
    <>
      <div className="container-fluid miniProjects">
        <div className="row pt-4 pb-5 r1">
          <div className="col text-center">
            <Button HandleClick={() => setProject("ToDoList")} value="To-Do-List" bgColor={project === "ToDoList" ? "bg-info" : "bg-success"} />
            <Button HandleClick={() => setProject("StopWatch")} value="Stop-Watch" bgColor={project === "StopWatch" ? "bg-info" : "bg-success"} />
            <Button HandleClick={() => setProject("SearchTable")} value="Search-Table" bgColor={project === "SearchTable" ? "bg-info" : "bg-success"} />
          </div>
        </div>
        <div className="row justify-content-center r2">
          <div className="col-lg-4 col-md-6 col-sm-8">
            {project === "ToDoList" && <ToDoList />}
            {project === "StopWatch" && <StopWatch />}
            {project === "SearchTable" && <SearchTable />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
