import { createTasks, deleteTasks } from "../../services/tasks";
import { useTasks } from "../../hooks/useTasks";
import { useEffect, useState } from "react"

export default function DashBoard() {

    const { tasks, removeTask, saveTask } = useTasks();


    async function handleTest(id) {
        removeTask(id);
    }

    async function handleEdit(task) {
        const updated = { ...task, status: "completed" }
        saveTask(updated, task)
    }

    return (
        <>
            <p>Welcome to dashboard!</p>

            <table>
                <thead>
                    <tr>
                        <th>Task Title</th>
                        <th>Task Due Date</th>
                        <th>Task Priority</th>
                        <th>Task Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>{task.due_date}</td>
                            <td>{task.priority}</td>
                            <td>{task.status}</td>
                            <td>
                                <button className="bg-red-500 hover:bg-red-700" onClick={() => handleTest(task.id)}>Delete</button>
                                <button className="bg-yellow-500 hover:bg-yellow-700" onClick={() => handleEdit(task)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>



            <button className="bg-blue-500 hover:bg-blue-700" onClick={handleTest}>Test Add Task</button>

        </>
    )
}