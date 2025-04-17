import Link from "next/link"

import { cn } from "@/lib/utils"
import { UserAccountNav } from "@/components/layout/user-account-nav"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  // Mock user data - in a real app, this would come from your auth provider
  const user = {
    name: "John Doe",
    email: "john@example.com",
    image: null,
  }

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">ArcStratus</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <UserAccountNav user={user} />
        </div>
      </div>
    </header>
  )
}
