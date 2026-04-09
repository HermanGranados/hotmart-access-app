import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import VaporaClient from "./VaporaClient";
import { getUserMembership } from "@/lib/get-user-membership";

export default async function Page() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();

  const user = data?.user;

  if (!user) {
    redirect("/login");
  }

  const membership = await getUserMembership(user.email!);

  return (
    <VaporaClient
      isPremium={membership.isPremium}
      userEmail={membership.email}
      planName={membership.planName}
      daysRemaining={membership.daysRemaining}
    />
  );
}