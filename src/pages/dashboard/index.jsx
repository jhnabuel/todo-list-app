import { useState, useEffect } from "react";
import { useTasks } from "../../hooks/useTasks";
import AppLayout from "../../components/layout/AppLayout";
import TaskList from "../../components/tasks/TaskList";
import TaskModal from "../../components/tasks/TaskModal";
import { useLists } from "../../hooks/useLists";

export default function DashBoard() {
    const [modalOpen, setModalOpen] = useState(false);
    const { tasks, loading, saveTask, removeTask } = useTasks();
    const [editingTask, setEditingTask] = useState(null);
    const { lists } = useLists();

    useEffect(() => {
        console.log('lists:', lists);
    }, [lists]);

    const openModal = (task = null) => {
        setEditingTask(task);
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
        setEditingTask(null);
    }

    const handleModalSubmit = async (formData) => {
        await saveTask(formData, editingTask);
        closeModal();
        setSelectedTask(null);
    }

    const handleEdit = (task) => {
        setEditingTask(task);
        setModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this task?')) return;
        await removeTask(id);
    }

    const handleToggle = async (id, currentStatus) => {
        await saveTask({
            status: currentStatus === 'completed' ? 'todo' : 'completed'
        }, { id });
    };


    return (
        <>
            <AppLayout onNewTask={() => openModal()}>
                <TaskList
                    tasks={tasks}
                    loading={loading}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onToggle={handleToggle}
                />

                <TaskModal
                    isOpen={modalOpen}
                    onClose={closeModal}
                    onSubmit={handleModalSubmit}
                    selectedTask={editingTask} />
            </AppLayout>
        </>
    )
}