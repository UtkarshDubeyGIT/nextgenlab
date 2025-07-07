import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
export default async function DashboardPage() {
  const supabase = await createClient();
  console.log("Dashboard page loaded");
  const { data, error } = await supabase.auth.getUser();
  console.log("User data:", data);
  console.log("Error:", error);
  if (error || !data?.user) {
    console.error("Error fetching user data:", error);
    // Redirect to login if user is not authenticated
    console.error("User not authenticated, redirecting to login");
    redirect("/login");
  }
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          
        </main>
      </SidebarProvider>
    </>
  );
}
