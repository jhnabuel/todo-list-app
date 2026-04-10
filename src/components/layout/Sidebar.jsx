import { useAuth } from "../../context/AuthContext";


export default function Sidebar() {
    const { user, logout } = useAuth();

    const initials = user?.user_metadata?.first_name?.[0] + user?.user_metadata?.last_name[0] || U;
    const fullName = `${user?.user_metadata?.first_name || ''} ${user?.user_metadata?.last_name || ''}`.trim();

    return (
        <>
            <aside className="w-58 min-w-58 h-screen bg-stone-100 border-r border-stone-200 flex flex-col">
                <div className="p-4 border-b border-stone-200 space-y-3">
                    <h1 className="font-serif text-xl text-stone-900 text-center tracking-tight mb-1">Task Manager</h1>

                    <div className="flex items-center gap-2 bg-white border border-stone-200 rounded-lg px-3 py-2">
                        <div className="w-6 h-6 rounded-full bg-stone-900 flex items-center justify-center text-white font-mono text-[10px]">
                            {initials}
                        </div>
                        <span className="text-sm text-stone-700 font-medium truncate">{fullName}</span>
                    </div>

                </div>

                <nav nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
                    <ul>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400 px-2 py-1 mt-1">
                            Views
                        </p>
                        {[{ label: 'All Tasks' },
                        { label: 'Today' },
                        { label: 'Upcoming' },
                        { label: 'Completed' },
                        ].map(item => (<div key={item.label} className="flex font-sans items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-stone-600 hover:bg-stone-200 cursor-pointer transition-colors duration-100">
                            {item.label}
                        </div>))}

                        <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400 px-2 py-1 mt-1">
                            Lists
                        </p>

                        {[{ label: 'Personal' },
                        { label: 'Academics' },
                        { label: 'Extracurriculars' },
                        { label: 'Reading' },
                        { label: 'Health' }
                        ].map(item => (<div key={item.label} className="flex font-sans items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-stone-600 hover:bg-stone-200 cursor-pointer transition-colors duration-100">
                            {item.label}
                        </div>))}

                    </ul>
                </nav>

                <div className="p-3 border-t border-stone-200 space-y-1">
                    <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-stone-600 hover:bg-stone-200 transition-colors duration-100">
                        <span className="text-stone-400">+</span>
                        New Task
                    </button>


                    <button
                        onClick={logout}
                        className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-stone-400 hover:text-red-600 hover:bg-red-50 transition-colors duration-100">
                        Sign out
                    </button>
                </div>
            </aside>
        </>
    );
}