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

    async function saveList(list, selectedList) {
        setError(null)
        if (selectedList) {
            const { data, error } = await updateList(selectedList.id, list);
            if (error) setError(error);
            if (!error) setTasks(prev => prev.map(l => l.id == selectedList.id ? data : l));
        } else {
            const { data, error } = await createList(list);
            if (error) setError(error);
            if (!error) setLists(prev => [...prev, data]);
        }
        setLoading(false);
    }

    async function removeList(list_id) {
        setLoading(true)
        setError(null);
        const { error } = await deleteList(list_id);
        if (error) {
            setLoading(false);
            setError(error)
            return
        }
        setLists(prev => prev.filter(l => l.id !== list_id));
    }

    useEffect(() => {
        loadLists();
    }, []);

    return {
        lists,
        loading,
        error,
        saveList
    }
}