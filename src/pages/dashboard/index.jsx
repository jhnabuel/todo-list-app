import { useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import AppLayout from "../../components/layout/AppLayout";
import TaskList from "../../components/tasks/TaskList";
import TaskModal from "../../components/tasks/TaskModal";
export default function DashBoard() {
    const [modalOpen, setModalOpen] = useState(false);
    const { tasks, loading, saveTask, removeTask } = useTasks();
    const [editingTask, setEditingTask] = useState(null);

    const handleEdit = (task) => {
        setEditingTask(task);
        setModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this task?')) return;
        await removeTask(id);
    }

    const handleToggle = async (id, currentStatus) => {
        await updateTask(id, {     // calls the hook function
            status: currentStatus === 'done' ? 'todo' : 'done'
        });
    };


    return (
        <>
            <TaskList
                tasks={tasks}
                loading={loading}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onToggle={handleToggle}
            />
        </>
    )
}