import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import VaporaClient from "./VaporaClient";
import { getUserPremiumStatus } from "@/lib/get-user-premium";

export default async function Page() {
  const supabase = await createSupabaseServerClient();

  const { data } = await supabase.auth.getUser();

  const user = data?.user;

  if (!user) {
    redirect("/login");
  }

  const isPremium = await getUserPremiumStatus(user.email!);

  return <VaporaClient isPremium={isPremium} />;
}