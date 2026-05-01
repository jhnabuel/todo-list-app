export default function Topbar({ onNewTask }) {
    return (
        <>
            <header className="h-14 min-h-14 bg-white border-b border-stone-200 flex items-center px-6 gap-4">
                <h1 className="font-serif text-xl text-stone-900 tracking-tight"> All Tasks</h1>


                <div className="flex-1" />

                <div className="flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-lg px-3 py-1.5 w-48">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <circle cx="5.5" cy="5.5" r="4" stroke="#C4C4BC" strokeWidth="1.3" />
                        <path d="M8.5 8.5L11 11" stroke="#C4C4BC" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                    <input
                        className="bg-transparent text-sm text-stone-900 outline-none w-full placeholder:text-stone-300"
                        placeholder="Search tasks..."
                        disabled
                    />
                </div>

                {/* New Task button — no handler yet */}
                <button className="flex items-center gap-2 px-3 py-1.5 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-700 transition-colors duration-150"
                    onClick={onNewTask}>
                    <span>+</span>
                    New Task
                </button>
            </header>
        </>
    )
}