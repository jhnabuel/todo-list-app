import TaskItem from "./TaskItem"
import Skeleton from "../ui/Skeleton"

export default function TaskList({ tasks, loading, onEdit, onDelete, onToggle }) {

    return (
        <div className="border border-stone-200 rounded-xl overflow-hidden bg-white">
            {tasks.map((task, index) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onToggle={onToggle}
                    isLast={index === tasks.length - 1}
                />
            ))}
        </div>
    );
}