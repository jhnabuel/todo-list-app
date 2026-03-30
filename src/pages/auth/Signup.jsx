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

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(null);
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        setLoading(true);

        const { error } = await supabase.auth.signUp({
            email, password,
            options: {
                data: {
                    first_name: firstName,
                    last_name: lastName
                }
            }
        });

        if (error) {
            setError(error.message);
            setLoading(false);
            return;
        }

        setConfirmed(true);
        setLoading(false);
    }

    if (confirmed) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-stone-50 px-6">
                <div className="w-full max-w-sm bg-white border border-stone-200 rounded-2xl px-9 py-10 text-center">


                    <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10l4.5 4.5 7.5-8" stroke="#2D7D5A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <h1 className="font-serif text-2xl text-stone-900 tracking-tight mb-2">
                        Check your email
                    </h1>


                    <p className="text-sm text-stone-500 mb-1">
                        We sent a confirmation link to
                    </p>
                    <p className="font-mono text-xs bg-stone-50 border border-stone-200 text-stone-700 px-3 py-2 rounded-lg inline-block mb-6">
                        {email}
                    </p>

                    <p className="text-sm text-stone-400 mb-6">
                        Click it to activate your account then sign in.
                    </p>


                    <Link
                        to="/login"
                        className="block w-full py-2.5 px-4 bg-stone-900 text-white text-sm font-medium rounded-lg text-center transition-all duration-150 hover:bg-stone-700"
                    >
                        Back to sign in
                    </Link>

                </div>
            </div>
        );
    }
    return (
        <>
            <div className="flex min-h-screen flex-col items-center justify-center bg-stone-50 px-6">
                <div className="w-full max-w-sm bg-white border border-stone-200 rounded-2xl px-9 py-10">

                    <h1 className="font-serif text-2xl text-stone-900 text-center tracking-tight mb-1">Create account</h1>
                    <h3 className="font-sans text-sm text-stone-400 text-center mb-7"> Start managing work that matters</h3>

                    <form className="space-y-3" onSubmit={handleSignUp}>
                        <div className="flex justify-between gap-3">
                            <div>
                                <label className="cred-label">First Name</label>
                                <input type="text"
                                    className="cred-input"
                                    value={firstName}
                                    onChange={(e) => { setFirstName(e.target.value) }}
                                    placeholder="John"
                                    required />
                            </div>

                            <div>
                                <label className="cred-label">Last Name</label>
                                <input type="text"
                                    className="cred-input"
                                    value={lastName}
                                    onChange={(e) => { setLastName(e.target.value) }}
                                    placeholder="Doe"
                                    required />
                            </div>
                        </div>

                        <div>
                            <label className="cred-label">Work Email</label>
                            <input type="email"
                                className="cred-input"
                                value={email}
                                autoComplete="email"
                                onChange={(e) => { setEmail(e.target.value) }}
                                placeholder="you@example.com"
                                required />
                        </div>

                        <div>
                            <label className="cred-label">Password</label>
                            <input type="password"
                                className="cred-input"
                                value={password}
                                autoComplete="new-password"
                                onChange={(e) => { setPassword(e.target.value) }}
                                placeholder="Must have at least 6 characters"
                                required />
                        </div>

                        <div>
                            <label className="cred-label">Confirm Password</label>
                            <input type="password"
                                className="cred-input"
                                value={confirmPassword}
                                autoComplete="new-password"
                                onChange={(e) => { setConfirmPassword(e.target.value) }}
                                placeholder="Confirm your password"
                                required />
                        </div>

                        {error && (
                            <p className="text-xs text-red-600 bg-red-50 border border-red-100 px-3 py-2 rounded-lg">
                                {error}
                            </p>
                        )}

                        <button className="cred-btn"
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