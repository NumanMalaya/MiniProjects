import React, { useReducer, useState } from "react";
import Button from "./Button";

export default function List() {
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const initialState = ["Take a shower", "Take a nap"];

  const setStateFun = (tasks, action) => {
    switch (action.type) {
      case "saveTask":
        return tasks.map((task, i) =>
          i === action.payload ? action.editValue : task
        );

      case "addTask":
        if (action.payload.trim() !== "") {
          return [...tasks, action.payload];
        }
        return tasks;
      case "deleteTask":
        return tasks.filter((_, i) => i !== action.payload);
      case "moveUpTask":
        if (action.payload > 0) {
          const updatedTasks = [...tasks];
          [updatedTasks[action.payload], updatedTasks[action.payload - 1]] = [
            updatedTasks[action.payload - 1],
            updatedTasks[action.payload],
          ];
          return updatedTasks;
        }
        return tasks;
      case "moveDownTask":
        if (action.payload < tasks.length - 1) {
          const updatedTasks = [...tasks];
          [updatedTasks[action.payload], updatedTasks[action.payload + 1]] = [
            updatedTasks[action.payload + 1],
            updatedTasks[action.payload],
          ];
          return updatedTasks;
        }
        return tasks;
      default:
        return tasks;
    }
  };
  const [tasks, setTasks] = useReducer(setStateFun, initialState);

  return (
    <div className="list">
      <div className="form">
        <input
          className="px-3 py-2 border-0"
          placeholder="Enter a task . . ."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          type="text"
        />
        <button
          className="bg-success text-light px-3 py-2 border-0"
          onClick={() => {
            setTasks({ type: "addTask", payload: newTask });
            setNewTask("");
          }}
        >
          Add
        </button>
      </div>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div className="task bg-light text-dark p-3 my-2 rounded">
            {editIndex === index ? (
              <>
                <input
                  placeholder="Enter a task . . ."
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  type="text"
                />
              </>
            ) : (
              <h5 key={index} className="d-inline">
                {task}
              </h5>
            )}
            <div className="buttons">
              {editIndex === index ? (
                <Button
                  HandleClick={() => {
                    setTasks({
                      type: "saveTask",
                      payload: index,
                      editValue: editText,
                    });
                    setEditIndex(null);
                    setEditText("");
                  }}
                  value="Save"
                  bgColor="bg-warning"
                />
              ) : (
                <Button
                  HandleClick={() => {
                    setEditIndex(index);
                    setEditText(task);
                  }}
                  value="Edit"
                  bgColor="bg-success"
                />
              )}
              <Button
                HandleClick={() =>
                  setTasks({ type: "deleteTask", payload: index })
                }
                value="Delete"
                bgColor="bg-danger"
              />
              <Button
                HandleClick={() =>
                  setTasks({ type: "moveUpTask", payload: index })
                }
                value="▲"
                bgColor="bg-info"
              />
              <Button
                HandleClick={() =>
                  setTasks({ type: "moveDownTask", payload: index })
                }
                value="▼"
                bgColor="bg-info"
              />
            </div>
          </div>
        ))
      ) : (
        <h3 className="text-center">Nothing here yet!</h3>
      )}
    </div>
  );
}
