"use client";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import { Home, FileText, Users, Megaphone, LogOut } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link"; 
import { FloatingNav } from "@/components/ui/floating-navbar";
import ResearchPapersEditor from "./components/research_papers";
import TeamProfilesEditor from "./components/team";
import AnnouncementsEditor from "./components/announcements";
const NAV_ITEMS = [
  { label: "Research Papers", icon: FileText },
  { label: "Team", icon: Users },
  { label: "Announcements", icon: Megaphone },
];

export default function DashboardPage() {
  //use state does not work in async server components
  const [activeTab, setActiveTab] = useState("Research Papers");
  const [userEmail, setUserEmail] = useState("user@example.com");

  // Move Supabase logic to useEffect
  useEffect(() => {
    async function getUser() {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      setUserEmail(data?.user?.email || "user@example.com");
    }
    getUser();
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen bg-neutral-100">
      {/* Sidebar */}
      <aside className="w-48 md:w-64 bg-white shadow flex flex-col justify-between">
        <div>
          <Link
            href="/"
            className="flex items-center w-full px-4 md:px-6 py-3 md:py-4 text-lg font-bold text-black hover:text-blue-700 transition"
          >
            <Home className="mr-2 md:mr-3" /> Home
          </Link>
          <nav className="mt-4 md:mt-6 flex flex-col space-y-1 md:space-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                className={`flex items-center px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium transition ${
                  activeTab === item.label
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setActiveTab(item.label)}
              >
                <item.icon className="mr-2 md:mr-3" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="px-4 md:px-6 py-3 md:py-4 border-t flex flex-col items-start">
          <span className="text-xs md:text-sm text-gray-500 mb-1 md:mb-2 truncate w-full">
            {userEmail}
          </span>
          <button
            onClick={handleLogout}
            className="flex items-center text-red-600 hover:text-red-800 text-xs md:text-sm font-medium"
          >
            <LogOut className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" /> Logout
          </button>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 lg:p-10">
        {activeTab === "Home" && (
          <div>
            <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Welcome to the Dashboard
            </h1>
            <p className="text-gray-700">
              Select a section from the sidebar to get started.
            </p>
          </div>
        )}
        {activeTab === "Research Papers" && (
          <div>
            <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Research Papers
            </h1>
            <p className="text-gray-700">
              List of research papers will appear here.
            </p>
            <ResearchPapersEditor></ResearchPapersEditor>
          </div>
        )}
        {activeTab === "Team" && (
          <div>
            <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Team</h1>
            <p className="text-gray-700">
              Team members and details will appear here.
            </p>
            <TeamProfilesEditor></TeamProfilesEditor>
          </div>
        )}
        {activeTab === "Announcements" && (
          <div>
            <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Announcements
            </h1>
            <p className="text-gray-700">Announcements will appear here.</p>
            <AnnouncementsEditor></AnnouncementsEditor>
          </div>
        )}
      </main>
    </div>
  );
}
