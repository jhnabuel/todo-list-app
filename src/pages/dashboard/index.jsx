import { useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import AppLayout from "../../components/layout/AppLayout";
import TaskList from "../../components/tasks/TaskList";

export default function DashBoard() {

    const { tasks, loading, saveTask, removeTask } = useTasks();
    const [editingTask, setEditingTask] = useState(null);

    const handleEdit = (task) => {
        setEditingTask(task);
        setModalOpen(true);
    };

    const handleModalSubmit = async (formData) => {
        if (editingTask) {
            await saveTask(editingTask.id, formData);
        } else {
            await saveTask(formData);
        }
        setModalOpen(false);
        setEditingTask(null);
    }


    const handleDelete = async (id) => {
        if (!window.confirm('Delete this task?')) return;
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