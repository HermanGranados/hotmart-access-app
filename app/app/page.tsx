import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import VaporaClient from "./VaporaClient";

export default async function Page() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();

  if (!data?.user) {
    redirect("/login");
  }

  return <VaporaClient />;
}