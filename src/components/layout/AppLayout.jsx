import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import { useState } from "react";
import TaskModal from "../tasks/TaskModal";
import { useTasks } from "../../hooks/useTasks";

export default function AppLayout({ children }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const { saveTask } = useTasks();

    function openModal(task = null) {
        setSelectedTask(task);
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
        setSelectedTask(null);
    }

    const handleModalSubmit = async (formData) => {
        await saveTask(formData, selectedTask);   // matches your useTasks signature
        setModalOpen(false);
        setSelectedTask(null);
    }

    return (<>


        <div className="flex h-screen overflow-hidden bg-stone-50">
            <Sidebar onNewTask={() => openModal()} />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Topbar onNewTask={() => openModal()} />
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>

        <TaskModal
            isOpen={modalOpen}
            onClose={closeModal}
            onSubmit={handleModalSubmit}
            selectedTask={selectedTask}
        />
    </>)
}