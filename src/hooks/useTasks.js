import { useEffect, useState } from "react";
import { createTasks, getTasks } from "../services/tasks";

export function useTasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    async function loadUsers() {
        setLoading(true);
        const { data } = await getTasks();
        setTasks(data || []);
        setLoading(false);
    }

    async function createTasks() {
        setLoading(true)
        const { data } = await createTasks({ title: "Test task" })
    }

    useEffect(() => {
        loadUsers();
    }, []);


    return {
        tasks,
        loading
    };
}