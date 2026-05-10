import { useState, useEffect } from "react";
import { createList, getList, deleteList, updateList } from "../services/lists";

export function useLists() {
    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function loadLists() {
        setLoading(true);
        setError(null);
        const { data, error } = await getList();

        if (error) {
            setError(error);
            setLoading(false);
            return;
        }

        setLists(data || []);
        setLoading(false);
    }
    useEffect(() => {
        loadLists();
    }, [])

    return { lists }
}