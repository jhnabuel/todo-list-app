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
        <div>
            <h1> Sign in</h1>
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} placeholder="you@example.com" required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} required />
                </div>

                <button type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
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