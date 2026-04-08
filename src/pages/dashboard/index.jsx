import { useTasks } from "../../hooks/useTasks";
import AppLayout from "../../components/layout/AppLayout";

export default function DashBoard() {

    const { tasks, loading, saveTask, removeTask } = useTasks();

    return (
        <>
            <AppLayout>

            </AppLayout>

        </>
    )
}