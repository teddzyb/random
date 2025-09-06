import Logo from "../common/Logo";
import NavMenu from "../common/NavMenu";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <nav className="h-16 border-b border-default-200 flex items-center justify-center px-4">
          <div className="container flex items-center justify-between">
            <Logo className="text-3xl font-semibold px-2" />
            <NavMenu />
          </div>
        </nav>

        <main className="flex flex-col flex-grow container mx-auto p-4">
          {children}
        </main>
      </div>

      <footer className="h-80 bg-default-100 flex flex-col items-center justify-center px-4">
        <div className="container text-sm text-default-500">
          {/* TODO: add footer content */}
        </div>
      </footer>
    </>
  );
};

export default MainLayout;