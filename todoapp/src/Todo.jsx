import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");     
  const [tasks, setTasks] = useState([]);     

  const addTask = () => {
    if (task.trim() === "") return; 
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };


  const toggleTask = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>React To-Do List</h1>

      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task..."
          style={{
            padding: "8px",
            width: "250px",
            borderRadius: "6px",
            border: "1px solid gray",
          }}
        />
        <button
          onClick={addTask}
          style={{
            marginLeft: "10px",
            padding: "8px 15px",
            borderRadius: "6px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
          }}
        >
          Add
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              onClick={() => toggleTask(index)}
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                cursor: "pointer",
                color: t.completed ? "gray" : "black",
              }}
            >
              {t.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
