import { useTasks } from "../../hooks/useTasks";
import AppLayout from "../../components/layout/AppLayout";

export default function DashBoard() {

    const { tasks, loading, saveTask, removeTask } = useTasks();

    return (
        <>
            <AppLayout>
                <p className="text-sm text-stone-400 font-mono">Tasks will appear here.</p>
            </AppLayout>

        </>
    )
}