export default function Sidebar() {

    return (
        <>
            <aside className="w-58 min-w-58 h-screen bg-stone-100 border-r border-stone-200 flex flex-col">
                <div className="p-4 border-b border-stone-200 space-y-3">
                    <h1 className="font-serif text-xl text-stone-900 text-center tracking-tight mb-1">Task Manager</h1>


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
                        ].map(item => (<div key={item.label} className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-stone-600 hover:bg-stone-200 cursor-pointer transition-colors duration-100">
                            {item.label}
                        </div>))}

                        <h2>Lists</h2>
                        <li>Personal</li>
                        <li>Academics</li>
                        <li>Extracurriculars</li>
                        <li>Reading</li>
                        <li>Health</li>
                    </ul>
                </nav>

                <div className="p-3 border-t border-stone-200">
                    <button>Add new task</button>
                </div>
            </aside>
        </>
    );
}