import Sidebar from "./Sidebar"
import Topbar from "./Topbar"


export default function AppLayout({ children, onNewTask, onNewList }) {

    return (<>
        <div className="flex h-screen overflow-hidden bg-stone-50">
            <Sidebar onNewTask={onNewTask} />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Topbar onNewTask={onNewTask} onNewList={onNewList} />
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    </>)
}