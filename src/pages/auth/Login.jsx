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


    return (<>
        <div className="flex min-h-full flex-col items-center justify-center h-screen px-6 py-12 lg:px-8">
            <h1 className="font-serif"> Welcome.</h1>
            <h3 className="font-sans"> Sign in to your workspace</h3>
            <form action="#" method="POST" className="space-y-6">
                <div>
                    <label>Email</label>
                    <input type="email" value={email} placeholder="you@example.com" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <button className=" flex w-full justify-center rounded-md bg-indigo-500 px-6 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" type="submit" disabled={loading}>{
                    loading ? 'Signing in...' : 'Sign in'}</button>
            </form>
            <p>
                No account? <Link to="/signup">Create one</Link>
            </p>
            <p>
                <Link to="/reset">Forgot password?</Link>
            </p>
        </div>
    </>)
}