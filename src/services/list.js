import supabase from "../utils/supabaseClient";

export const getList = async () => {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order("created_at", { ascending: true });
    if (error) {
        return {
            data: null,
            error: error.message
        }
    }
    return {
        data,
        error: null
    }
}


export const createList = async (listData) => {
    const { data, error } = await supabase
        .from('projects')
        .insert([listData])
        .select()
        .single();

    if (error) return { data: null, error: error.message }
    return { data, error: null }
}

export const deleteList = async (id) => {
    const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id)

    if (error) return { error: error.message }
    return { error: null }
}

export const updatelist = async (id, listData) => {
    const { data, error } = await supabase
        .from('projects')
        .update(listData)
        .eq("id", id)
        .select()
        .single();
    if (error) return { erorr: error.message, data: null }
    return { data, error: null }
}