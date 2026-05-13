import { useAuth } from "../../context/AuthContext";
import { useLists } from "../../hooks/useLists";

export default function Sidebar({ onNewTask, onEditList, onDeleteList, lists }) {
    const { user, logout } = useAuth();

    const initials = (user?.user_metadata?.first_name?.[0]) + (user?.user_metadata?.last_name[0]) || U;
    const fullName = `${user?.user_metadata?.first_name ?? ''} ${user?.user_metadata?.last_name ?? ''}`.trim();

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

                <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
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

                        {lists.map(list => (
                            <div key={list.id} className="group flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-stone-200 cursor-pointer">

                                <span className="w-2 h-2 rounded-full flex-shrink-0"
                                    style={{ background: list.color }} />


                                <span className="flex-1 text-sm text-stone-600 truncate" >
                                    {list.name}
                                </span>

                                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                                    <button onClick={(e) => { e.stopPropagation(); onEditList(list) }} className="p-1 rounded text-stone-400 hover:text-stone-700 hover:bg-stone-300 transition-all">
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                            <path d="M8 2l2 2-6 6H2V8l6-6z" stroke="currentColor"
                                                strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button onClick={(e) => { e.stopPropagation(); onDeleteList(list.id) }}
                                        className="p-1 rounded text-stone-400 hover:text-red-600 hover:bg-red-50 transition-all">
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                            <path d="M2 3h8M4 3V2h4v1M5 5.5v3M7 5.5v3M3 3l.7 7h4.6L9 3"
                                                stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </ul>
                </nav>

                <div className="p-3 border-t border-stone-200 space-y-1">
                    <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-stone-600 hover:bg-stone-200 transition-colors duration-100
                            " onClick={onNewTask}>
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