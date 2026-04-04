import { useEffect, useState } from "react";
import { createTasks, getTasks, deleteTasks } from "../services/tasks";

export function useTasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    async function loadTasks() {
        setLoading(true);
        const { data } = await getTasks();
        setTasks(data || []);
        setLoading(false);
    }

    async function saveTask(taskData) {
        const { data, error } = await createTasks(taskData);
    }

    async function removeTask(task_id) {
        setLoading(true)
        await deleteTasks(task_id);
        await loadUsers();
    }

    useEffect(() => {
        loadTasks();
    }, []);


    return {
        tasks,
        loading,
        saveTask,
        removeTask
    };
}