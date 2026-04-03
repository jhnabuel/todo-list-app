import { useEffect, useState } from "react";
import { getTasks } from "../services/tasks";

export function useTasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    async function loadUsers() {
        setLoading(true);


    }
}