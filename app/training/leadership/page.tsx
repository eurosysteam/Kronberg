import { redirect } from "next/navigation";
import { TrainingTaskPage } from "@/components/training-task-page";
import { getTrainingAccess } from "@/lib/training-session";

export default async function LeadershipTrainingPage() {
  const access = await getTrainingAccess();

  if (access !== "leadership") {
    redirect("/training");
  }

  return <TrainingTaskPage area="leadership" />;
}
