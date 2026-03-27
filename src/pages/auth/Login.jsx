import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate, Link } from "react-router-dom"

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const { error } = await login(email, password);

        if (error) {
            setError(error)
            setLoading(false)
            return;
        }

        navigate('/dashboard')
    };


    return (<>
        <div className="flex min-h-screen flex-col items-center justify-center bg-stone-50 px-6">
            <div className="w-full max-w-sm bg-white border border-stone-200 rounded-2xl px-9 py-10">


                <h1 className="font-serif text-2xl text-stone-900 text-center tracking-tight mb-1"> Welcome.</h1>
                <h3 className="font-sans text-sm text-stone-400 text-center mb-7"> Sign in to your workspace</h3>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="cred-label">Work Email</label>
                        <input className="cred-input"
                            type="email"
                            value={email}
                            autoComplete="email"
                            placeholder="you@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </div>
                    <div>
                        <label className="cred-label">Password</label>
                        <input className="cred-input"
                            type="password"
                            value={password}
                            autoComplete="current-password"
                            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>

                    {error && (
                        <p className="text-xs text-red-600 bg-red-50 border border-red-100 px-3 py-2 rounded-lg">
                            {error}
                        </p>
                    )}

                    <div className="flex justify-end">
                        <Link to="/reset" className="text-xs text-stone-400 hover:text-stone-900 transition-colors duration-150">
                            Forgot password?
                        </Link>
                    </div>

                    <button className="cred-btn"
                        type="submit"
                        disabled={loading}>
                        {loading ? 'Signing in...' : 'Sign in'}
                    </button>
                </form>

                <div className="flex items-center gap-3 my-5">
                    <div className="flex-1 h-px bg-stone-100" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-stone-300">or</span>
                    <div className="flex-1 h-px bg-stone-100" />
                </div>

                <p className="text-center text-xs text-stone-400">
                    No account? {' '}
                    <Link to="/signup" className="text-stone-900 font-medium border-b border-stone-200 hover:border-stone-900 transition-colors duration-150">
                        Create one
                    </Link>
                </p>

            </div>

        </div>
    </>)
}