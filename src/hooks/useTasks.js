import { useEffect, useState } from "react";
import { createTasks, getTasks, deleteTasks, updateTask } from "../services/tasks";

export function useTasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    async function loadTasks() {
        setLoading(true);
        const { data } = await getTasks();
        setTasks(data || []);
        setLoading(false);
    }

    async function saveTask(task, selectedTask) {
        if (selectedTask) {
            const { data, error } = await updateTask(selectedTask.id, task);
            console.log(error)
            if (!error) setTasks(prev => prev.map(t => t.id === selectedTask.id ? data : t));
        } else {
            const { data, error } = await createTasks(task);
            if (!error) setTasks(prev => [...prev, data]);
        }
    }

    async function removeTask(task_id) {
        setLoading(true)
        await deleteTasks(task_id);
        await loadTasks();
    }

    useEffect(() => {
        loadTasks();
    }, []);


    return {
        tasks,
        loading,
        saveTask,
        removeTask,
        loadTasks
    };
}