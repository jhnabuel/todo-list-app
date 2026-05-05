export default function TaskItem({ task, onEdit, onDelete, onToggle, isLast }) {
    const isCompleted = task.status === 'completed';

    const isOverdue = task.due_date
        && new Date(task.due_date) < new Date()
        && !isCompleted;

    const isToday = task.due_date === new Date().toISOString().split('T')[0];

    const priorityStyles = {
        high: 'bg-red-50 text-red-600 border border-red-100',
        medium: 'bg-amber-50 text-amber-600 border border-amber-100',
        low: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
    };

    const dueDateStyle = isOverdue
        ? 'text-red-500'
        : isToday
            ? 'text-amber-500'
            : 'text-stone-400';

    return (
        <>
            <div className={`
            group flex items-center gap-3 px-4 py-3
            hover:bg-stone-50 transition-colors duration-100
            ${!isLast ? 'border-b border-stone-100' : ''}
        `}>
                <button onClick={() => onToggle(task.id, task.status)}
                    className={`
                    w-[18px] h-[18px] rounded-full border flex-shrink-0
                    flex items-center justify-center transition-all duration-150
                    ${isCompleted
                            ? 'bg-emerald-600 border-emerald-600'
                            : 'border-stone-300 hover:border-stone-900'
                        }
                `}> {isCompleted && (
                        <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2.5 2.5L8 3" stroke="white"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )} </button>

                <span className={`
                    flex-1 text-sm truncate min-w-0 transition-colors duration-150
                    ${isCompleted ? 'line-through text-stone-300' : 'text-stone-800'}
                `}>
                    {task.title}
                </span>

                {task.due_date && (
                    <span className={`font-mono text-xs flex-shrink-0 ${dueDateStyle}`}>
                        {task.due_date}
                    </span>
                )}

                {task.priority && (
                    <span className={`
                    font-mono text-[10px] uppercase tracking-wide
                    px-2 py-0.5 rounded-md flex-shrink-0
                    ${priorityStyles[task.priority]}
                `}>
                        {task.priority}
                    </span>
                )}

                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                    <button
                        onClick={() => onEdit(task)}
                        className="p-1.5 rounded-md text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-all duration-100"
                    >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M8 2l2 2-6 6H2V8l6-6z" stroke="currentColor"
                                strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button
                        onClick={() => onDelete(task.id)}
                        className="p-1.5 rounded-md text-stone-400 hover:text-red-600 hover:bg-red-50 transition-all duration-100"
                    >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 3h8M4 3V2h4v1M5 5.5v3M7 5.5v3M3 3l.7 7h4.6L9 3"
                                stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>



            </div>

        </>
    )
}