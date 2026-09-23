export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div className="w-full flex min-h-screen flex-col items-center justify-center bg-background">  
          {children}
      </div>
  );
}