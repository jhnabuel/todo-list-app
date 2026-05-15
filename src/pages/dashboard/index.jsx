import { useState, useEffect } from "react";
import { useTasks } from "../../hooks/useTasks";
import { useLists } from "../../hooks/useLists";
import AppLayout from "../../components/layout/AppLayout";
import TaskList from "../../components/tasks/TaskList";
import TaskModal from "../../components/tasks/TaskModal";
import ListModal from "../../components/lists/ListModal";

export default function DashBoard() {
    const [activeList, setActiveList] = useState(null);

    // task hook
    const { tasks, loading, saveTask, removeTask } = useTasks();

    // list hook
    const { lists, saveList, removeList } = useLists();

    // task modal state
    const [modalOpen, setModalOpen] = useState(false);
    const [editingTask, setEditingTask] = useState(null);

    // list modal state
    const [listModalOpen, setListModalOpen] = useState(false);
    const [editingList, setEditingList] = useState(null);

    // task handlers
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


    // list handlers
    const openListModal = (list = null) => {
        setEditingList(list);
        setListModalOpen(true);
    }

    const closeListModal = () => {
        setListModalOpen(false);
        setEditingList(null);
    }

    const handleListModalSubmit = async (formData) => {
        await saveList(formData, editingList);
        closeListModal
        setEditingList(null);
    }

    const handleDeleteList = async (id) => {
        if (!window.confirm('Delete this list? Tasks inside will become unassigned.')) return;
        await removeList(id);
    };

    const handleSelectList = (id) => {
        setActiveList(id);
    };

    const filteredTasks = activeList
        ? tasks.filter(t => t.project_id === activeList)
        : tasks;

    const activeListName = lists.find(l => l.id === activeList)?.name;

    return (
        <>
            <AppLayout onNewTask={() => openModal()}
                onNewList={() => openListModal()}
                onEditList={openListModal}
                onDeleteList={handleDeleteList}
                lists={lists}
                activeList={activeList}
                onSelectList={(id) => setActiveList(id)}
                topbarTitle={activeListName || 'All Tasks'}>

                <TaskList
                    tasks={filteredTasks}
                    loading={loading}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onToggle={handleToggle}
                />

                <TaskModal
                    isOpen={modalOpen}
                    onClose={closeModal}
                    onSubmit={handleModalSubmit}
                    selectedTask={editingTask}
                    lists={lists}
                />

                <ListModal
                    isOpen={listModalOpen}
                    onClose={closeListModal}
                    onSubmit={handleListModalSubmit}
                    selectedList={editingList}
                />
            </AppLayout>
        </>
    )
}