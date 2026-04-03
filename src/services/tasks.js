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

