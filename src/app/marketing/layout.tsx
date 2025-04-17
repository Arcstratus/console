import Link from "next/link"
import { MainNav } from "@/components/layout/main-nav"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">ArcStratus</span>
            </Link>
          </div>
          <MainNav />
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}
