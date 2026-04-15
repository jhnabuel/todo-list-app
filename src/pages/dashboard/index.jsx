import { useTasks } from "../../hooks/useTasks";
import AppLayout from "../../components/layout/AppLayout";
import TaskList from "../../components/tasks/TaskList";

export default function DashBoard() {

    const { tasks, loading, saveTask, removeTask } = useTasks();

    const handleEdit = (task) => {
        saveTask(task);
    }

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this task?')) return;  // UI concern
        await removeTask(id);      // calls the hook function
    }

    const handleToggle = async (id, currentStatus) => {
        await updateTask(id, {     // calls the hook function
            status: currentStatus === 'done' ? 'todo' : 'done'
        });
    };
    return (
        <>
            <AppLayout>

                <TaskList
                    tasks={tasks}
                    loading={loading}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onToggle={handleToggle}
                />
            </AppLayout>

        </>
    )
}