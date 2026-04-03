import { createTasks } from "../../services/tasks";
import { useTasks } from "../../hooks/useTasks";
import { useEffect, useState } from "react"

export default function DashBoard() {

    const { tasks } = useTasks();


    async function handleTest() {
        const result = await createTasks({ title: "Test task 2: electric boogaloo" });
        console.log(result)
    }
    return (
        <>
            <p>Welcome to dashboard!</p>
            <ul>

                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}

                <button className="bg-blue-500 hover:bg-blue-700" onClick={handleTest}>Test Add Task</button>
            </ul>
        </>
    )
}