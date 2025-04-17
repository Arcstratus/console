import { HeaderNamespaceMenu } from "./header-namespace-menu";
import { HeaderNavigationMenu } from "./header-navigation-menu";

export const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full shadow-sm">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center gap-4">
          <h1>L</h1>
          <HeaderNamespaceMenu />
          <HeaderNavigationMenu />
          <div className="flex-grow"></div>
          <div>actions</div>
        </div>
      </div>
    </header>
  );
};
