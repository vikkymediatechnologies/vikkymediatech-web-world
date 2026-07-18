import { supabase } from "./client";
import { Course } from "@/types/course";

// Shared select string so getCourses and getCourse never drift apart
const COURSE_SELECT = `
  *,
  course_durations (
    id,
    months,
    price
  ),
  course_technologies (
    id,
    name,
    icon
  ),
  course_projects (
    id,
    title,
    description,
    image,
    order_index
  ),
  course_requirements (
    id,
    requirement,
    order_index
  ),
  course_career_paths (
    id,
    title,
    description,
    order_index
  ),
  course_modules (
    id,
    title,
    description,
    order_index
  ),
  course_faqs (
    id,
    question,
    answer,
    order_index
  )
`;

export async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from("courses")
    .select(COURSE_SELECT)
    .order("created_at");

  if (error) throw error;

  return data ?? [];
}

export async function getCourse(slug: string): Promise<Course> {
  const { data, error } = await supabase
    .from("courses")
    .select(COURSE_SELECT)
    .eq("slug", slug)
    .single();

  if (error) throw error;

  // Keep ordered sections in the order editors set in Supabase,
  // since Postgres doesn't guarantee row order on nested selects.
  data.course_projects?.sort((a, b) => a.order_index - b.order_index);
  data.course_requirements?.sort((a, b) => a.order_index - b.order_index);
  data.course_career_paths?.sort((a, b) => a.order_index - b.order_index);
  data.course_modules?.sort((a, b) => a.order_index - b.order_index);
  data.course_faqs?.sort((a, b) => a.order_index - b.order_index);

  return data;
}
