const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="h-16 border-b border-default-200 flex items-center justify-center px-4">
        <div className="container flex items-center justify-between">
          <div className="text-3xl font-semibold px-2 text-primary font-logo">
            Random
          </div>
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;