export interface CourseDuration {
  id: string;
  months: number;
  price: number;
}

export interface CourseTechnology {
  id: string;
  name: string;
  icon: string | null;
}

export interface CourseProject {
  id: string;
  title: string;
  description: string;
  image: string | null;
  order_index: number;
}

export interface CourseRequirement {
  id: string;
  requirement: string;
  order_index: number;
}

export interface CourseCareerPath {
  id: string;
  title: string;
  description: string | null;
  order_index: number;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string | null;
  order_index: number;
}

export interface CourseFaq {
  id: string;
  question: string;
  answer: string;
  order_index: number;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  full_description: string;
  image: string;
  level: string;
  category: string;
  created_at: string;

  course_durations: CourseDuration[];
  course_technologies: CourseTechnology[];
  course_projects: CourseProject[];
  course_requirements: CourseRequirement[];
  course_career_paths: CourseCareerPath[];
  course_modules: CourseModule[];
  course_faqs: CourseFaq[];
}
