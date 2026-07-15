import { redirect } from "next/navigation";
import { TrainingTaskPage } from "@/components/training-task-page";
import { getTrainingAccess } from "@/lib/training-session";

export default async function IntelligenceTrainingPage() {
  const access = await getTrainingAccess();

  if (access !== "intelligence") {
    redirect("/training");
  }

  return <TrainingTaskPage area="intelligence" />;
}
