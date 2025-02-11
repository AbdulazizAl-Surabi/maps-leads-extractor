import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import MapServiceComponent from "@/components/MapServiceComponent";

// Import your client component
import LeadsList from "@/components/LeadsList";

export default async function ProtectedPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If no user, redirect
  if (!user) {
    return redirect("/sign-in");
  }

  // Otherwise, render protected content
  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      {/* Map Component */}
      <MapServiceComponent />

      {/* Leads List */}
      <LeadsList />
    </div>
  );
}
