import { DashboardHeader } from "@/components/layout/dashboard-header"
import { SidebarNav } from "@/components/layout/sidebar-nav"
import { Separator } from "@/components/ui/separator"
import { LayoutDashboard, Settings, Users, CreditCard, BarChart } from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const sidebarNavItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: <BarChart className="h-4 w-4" />,
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Billing",
    href: "/dashboard/billing",
    icon: <CreditCard className="h-4 w-4" />,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: <Settings className="h-4 w-4" />,
  },
]

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="relative overflow-hidden py-6 pr-6">
            <SidebarNav items={sidebarNavItems} />
          </div>
        </aside>
        <main className="flex w-full flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  )
}
