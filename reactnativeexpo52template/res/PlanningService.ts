import { Planning } from "@/model/Planning";
import { format } from "date-fns";

export const PlanningService = () => {}

export function getPlanningForDay(date: Date, plannings: Planning[]): Planning[]{
    return plannings.filter((planning)=> format(planning.from,"yyyy-MM-dd") === format(date,"yyyy-MM-dd"))
}