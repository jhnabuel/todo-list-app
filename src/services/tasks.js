import supabase from "../utils/supabaseClient";

export const getTasks = async () => {
    const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .order("id", { ascending: true });
    if (error) {
        return {
            data: null,
            error: error.message
        }
    }
    return {
        data,
        error: null
    };
}

export const createTasks = async (taskData) => {
    const { data, error } = await supabase
        .from('tasks')
        .insert([taskData])
        .select()
        .single()
    if (error) {
        return {
            data: null,
            error: error.message
        };
    }
    return {
        data,
        error: null
    };
}

