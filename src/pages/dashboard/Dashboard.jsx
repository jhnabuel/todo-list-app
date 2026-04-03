import { useTasks } from "../../hooks/useTasks";
import { useEffect, useState } from "react"

export default function DashBoard() {

    const { tasks } = useTasks();

    return (
        <>
            <p>Welcome to dashboard!</p>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </>
    )
}