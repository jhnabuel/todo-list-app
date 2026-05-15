import { act } from "react"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"


export default function AppLayout({ children,
    onNewTask, onNewList,
    onEditList, onDeleteList,
    lists, activeList, onSelectList, topbarTitle }) {

    return (<>
        <div className="flex h-screen overflow-hidden bg-stone-50">
            <Sidebar onNewTask={onNewTask}
                onEditList={onEditList}
                onDeleteList={onDeleteList}
                lists={lists}
                activeList={activeList}
                onSelectList={onSelectList}
            />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Topbar onNewTask={onNewTask}
                    onNewList={onNewList}
                    title={topbarTitle} />
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    </>)
}