import Logo from "../common/Logo";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="h-16 border-b border-default-200 flex items-center justify-center px-4">
        <div className="container flex items-center justify-between">
          <Logo className="text-3xl font-semibold px-2" />
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;