import Sidebar from "../components/Sidebar";

interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
