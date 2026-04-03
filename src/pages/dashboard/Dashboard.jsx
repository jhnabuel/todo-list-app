import { getTasks } from "../../services/tasks"
import { useEffect, useState } from "react"

export default function DashBoard() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks()
    }, [])

    async function fetchTasks() {
        const { data } = await getTasks();
        setTasks(data || []);

    }

    return (
        <>
            <p>welcome to dashboard!</p>
           <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
           </ul>
        </>
    )
}