import { useEffect, useState } from "react";
import { createTasks, getTasks, deleteTasks, updateTask } from "../services/tasks";

export function useTasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function loadTasks() {
        setLoading(true);
        const { data, error } = await getTasks();
        if (error) setError(error);
        setTasks(data || []);
        setLoading(false);
    }

    async function saveTask(task, selectedTask) {
        setLoading(true);
        if (selectedTask) {
            const { data, error } = await updateTask(selectedTask.id, task);
            if (error) setError(error);
            if (!error) setTasks(prev => prev.map(t => t.id === selectedTask.id ? data : t));
        } else {
            const { data, error } = await createTasks(task);
            if (error) setError(error);
            if (!error) setTasks(prev => [...prev, data]);
        }
        setLoading(false);
    }

    async function removeTask(task_id) {
        setLoading(true)
        const { error } = await deleteTasks(task_id);
        if (error) {
            setLoading(false);
            setError(error)
            return
        }
        setTasks(prev => prev.filter(t => t.id !== task_id));
    }

    useEffect(() => {
        loadTasks();
    }, []);


    return {
        tasks,
        loading,
        error,
        saveTask,
        removeTask,
        loadTasks
    };
}