import { useState } from "react";
import { LogOut, Menu, X, BarChart3, Users, FileText, DollarSign, Calendar, Bell } from "lucide-react";
import AdminDashboard from "./dashboards/AdminDashboard";
import TeacherDashboard from "./dashboards/TeacherDashboard";
import StudentDashboard from "./dashboards/StudentDashboard";
import ParentDashboard from "./dashboards/ParentDashboard";

export default function Dashboard() {
  // Mock user data - replace with your actual user data source
  const [user, setUser] = useState({
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "student", // Change this to test different roles: "admin", "teacher", "student", "parent"
    avatar: null
  });

  // Mock logout function
  const logout = () => {
    // Clear any session data
    sessionStorage.clear();
    localStorage.removeItem('user');
    // Redirect to login or home
    window.location.href = '/login';
  };

  // Desktop: collapses sidebar to icon-only width.
  // Mobile (< lg): controls whether the slide-in drawer is open at all.
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderDashboard = () => {
    const role = user?.role as string;
    switch (role) {
      case "admin":
        return <AdminDashboard />;
      case "teacher":
        return <TeacherDashboard />;
      case "student":
        return <StudentDashboard />;
      case "parent":
        return <ParentDashboard />;
      default:
        return <div className="p-8">Unknown role</div>;
    }
  };

  const getRoleLabel = (role?: string) => {
    const labels: Record<string, string> = {
      admin: "Administrator",
      teacher: "Teacher",
      student: "Student",
      parent: "Parent",
      principal: "Principal",
    };
    return labels[role || ""] || "User";
  };

  const navItems = [
    { icon: BarChart3, label: "Dashboard", href: "#" },
    { icon: Users, label: "Students", href: "#" },
    { icon: FileText, label: "Academics", href: "#" },
    { icon: DollarSign, label: "Fees", href: "#" },
    { icon: Calendar, label: "Timetable", href: "#" },
    { icon: Bell, label: "Announcements", href: "#" },
  ];

  const SidebarContent = ({ collapsed }: { collapsed: boolean }) => (
    <>
      <div className="p-4 border-b border-slate-700 flex items-center justify-between">
        {!collapsed && <h1 className="text-xl font-bold">Sri NRI</h1>}
        {/* Desktop collapse toggle — hidden on mobile, where the drawer
            close button (X) in the header takes over this role instead. */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="hidden lg:inline-flex hover:bg-slate-800 p-2 rounded"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
        </button>
        {/* Mobile drawer close button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden hover:bg-slate-800 p-2 rounded"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <a
              key={i}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg transition"
            >
              <Icon className="w-5 h-5 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </a>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <button
          onClick={() => logout()}
          className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg transition w-full"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </>
  );

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Desktop sidebar — persistent, collapsible to icon-only width */}
      <div
        className={`hidden lg:flex ${
          sidebarOpen ? "w-64" : "w-20"
        } bg-slate-900 text-white transition-all duration-300 flex-col shrink-0`}
      >
        <SidebarContent collapsed={!sidebarOpen} />
      </div>

      {/* Mobile sidebar — slide-in drawer with backdrop, only rendered
          (and interactive) below the lg breakpoint */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative w-72 max-w-[85vw] bg-slate-900 text-white flex flex-col h-full shadow-2xl">
            <SidebarContent collapsed={false} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg shrink-0"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-slate-700" />
            </button>
            <div className="min-w-0">
              <h2 className="text-lg sm:text-2xl font-bold text-slate-900 truncate">
                {getRoleLabel(user?.role)}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 truncate">{user?.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <button className="p-2 hover:bg-gray-100 rounded-lg" aria-label="Notifications">
              <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
            </button>
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">
              {user?.name?.charAt(0) || 'U'}
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto">
          {renderDashboard()}
        </div>
      </div>
    </div>
  );
}