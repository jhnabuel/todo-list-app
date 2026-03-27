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
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');



    return (
        <>
            <div className="flex min-h-screen flex-col items-center justify-center bg-stone-50 px-6">
                <div className="w-full max-w-sm bg-white border border-stone-200 rounded-2xl px-9 py-10">

                    <h1 className="font-serif text-2xl text-stone-900 text-center tracking-tight mb-1">Create account</h1>
                    <h3 className="font-sans text-sm text-stone-400 text-center mb-7"> Start managing work that matters</h3>

                    <form className="space-y-3">
                        <div className="flex justify-between gap-3">
                            <div>
                                <label className="cred-label">First Name</label>
                                <input type="text" className="cred-form" value={firstName} onChange={(e) => { e.target.value }} placeholder="John" required />
                            </div>

                            <div>
                                <label className="cred-label">Last Name</label>
                                <input type="text " className="cred-form" value={lastName} onChange={(e) => { e.target.value }} placeholder="Doe" required />
                            </div>
                        </div>

                        <div>
                            <label className="cred-label">Work Email</label>
                            <input type="email" className="cred-form" value={email} onChange={(e) => { e.target.value }} placeholder="you@example.com" required />
                        </div>

                        <div>
                            <label className="cred-label">Password</label>
                            <input type="password" className="cred-form" value={password} onChange={(e) => { e.target.value }} placeholder="Must have at least 6 characters" required />
                        </div>

                        <div>
                            <label className="cred-label">Confirm Password</label>
                            <input type="password" className="cred-form" value={confirmPassword} onChange={(e) => { e.target.value }} placeholder="Confirm your password" required />
                        </div>

                        <button className="cred-button"
                            type="submit"
                            disabled={loading}>
                            {loading ? 'Signing in...' : 'Sign up'}
                        </button>
                    </form>

                    <div className="flex items-center gap-3 my-5">
                        <div className="flex-1 h-px bg-stone-100" />
                        <span className="font-mono text-[10px] uppercase tracking-widest text-stone-300">or</span>
                        <div className="flex-1 h-px bg-stone-100" />
                    </div>

                    <p className="text-center text-xs text-stone-400">Already have an account? {' '}
                        <Link to="/login"
                            className="text-stone-900 font-medium border-b border-stone-200 hover:border-stone-900 transition-colors duration-150">Sign in</Link></p>
                </div>
            </div>
        </>
    )
}