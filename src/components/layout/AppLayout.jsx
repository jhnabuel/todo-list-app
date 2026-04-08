import Sidebar from "./Sidebar"

export default function AppLayout() {
    return (<>

        <div className="flex h-screen overflow-hidden bg-stone-50">
            <Sidebar />
        </div>

    </>)
}