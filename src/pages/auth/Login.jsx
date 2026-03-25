import { useEffect, useState } from "react"
import { login } from "../../context/AuthContext"

export default function Login() {
    const [formData, setForm] = useState()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (<>
        <form>
            <input name="username"></input>
            <input name="password" type="password"></input>
            <button type="submit">Login</button>
        </form>
    </>)
}