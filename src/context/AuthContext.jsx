import { useContext, useState, createContext, useEffect } from "react";
import supabase from "../utils/supabaseClient";


export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used inside AuthProvider");
    return context;
}

export default function AuthProvider({ children }) {
    console.log("AuthProvider is mounting")
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (event, session) => {
                setSession(session);
                setUser(session?.user ?? null);
                setLoading(false);
            }
        );
        return () => subscription.unsubscribe();
    }, []);

    const login = (email, password) => supabase.auth.signInWithPassword({ email, password });

    const logout = () => supabase.auth.signOut();

    return (
        <AuthContext.Provider value={{ login, logout, session, user, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

