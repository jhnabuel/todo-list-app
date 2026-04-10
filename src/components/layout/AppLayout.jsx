import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

export default function AppLayout({ children }) {
    return (<>

        <div className="flex h-screen overflow-hidden bg-stone-50">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Topbar />
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>

    </>)
}