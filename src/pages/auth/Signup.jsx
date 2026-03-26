import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import supabase from '../../utils/supabaseClient';

export default function Signup() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    return (
        <>
            <div>
                <form>
                    <div>
                        <label>First Name</label>
                        <input type="text" />

                        <label>Last Name</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label>Work Email</label>
                        <input type="email" />
                    </div>

                    <div>
                        <label>Password</label>
                        <input type="email" />
                    </div>

                    <button className=" w-full py-2.5 px-4 bg-stone-900 text-white text-sm font-medium rounded-lg transition-all duration-150 hover:bg-stone-700 active:scale-99 disabled:opacity-50 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={loading}>
                        {loading ? 'Signing in...' : 'Sign in'}
                    </button>
                </form>

                <p>Already have an account? <Link to="/login">Sign in</Link></p>
            </div>
        </>
    )
}