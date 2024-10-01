import LeftSide from "@/components/LeftSide"
import DashboardHeader from "@/components/DashboardHeader"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <DashboardHeader />
            <main className="box ai-start jc-start nowrap">
                <LeftSide />
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout