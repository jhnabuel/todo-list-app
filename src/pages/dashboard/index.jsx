import { useTasks } from "../../hooks/useTasks";
import AppLayout from "../../components/layout/AppLayout";
import TaskItem from "../../components/tasks/TaskItem";

export default function DashBoard() {

    const { tasks, loading, saveTask, removeTask } = useTasks();

    return (
        <>
            <AppLayout>
                <p className="text-sm text-stone-400 font-mono">Tasks will appear here.</p>

                <TaskItem
                    task={{
                        id: '1',
                        title: 'Test task',
                        status: 'todo',
                        priority: 'high',
                        due_date: '2024-12-20'
                    }}
                    onEdit={() => console.log('edit')}
                    onDelete={() => console.log('delete')}
                    onToggle={() => console.log('toggle')}
                    isLast={true}
                />
            </AppLayout>

        </>
    )
}