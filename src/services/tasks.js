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
    const { data: { user } } = await supabase.auth.getUser();
    const { data, error } = await supabase
        .from('tasks')
        .insert([{ ...taskData, user_id: user.id }])
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


export const deleteTasks = async (id) => {
    const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', id)
    if (error) {
        return {
            error: error.message
        }
    }
    return {
        error: null
    }
}

export const updateTask = async (id, taskData) => {
    const { id: _, created_at, updated_at, ...safeData } = taskData;

    const { data, error } = await supabase
        .from("tasks")
        .update({
            ...safeData,
            updated_at: new Date().toISOString()
        })
        .eq("id", id)
        .select()
        .single();
    if (error) {
        return {
            error: error.message,
            data: null
        }
    }
    return {
        data,
        error: null
    }
}

export const getTaskById = async (id) => {
    const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq('id', id)
        .single();
    if (error) return { data: null, error: error.message };
    return { data, error: null }
}