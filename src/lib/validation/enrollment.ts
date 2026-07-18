import { z } from "zod";

export const personalInformationSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(11, "Phone number is required"),
  gender: z.string().min(1, "Select gender"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  state: z.string().min(2, "State is required"),
  country: z.string().min(2, "Country is required"),
  address: z.string().min(10, "Please provide a fuller address"),
});

export const educationInformationSchema = z.object({
  institution: z.string().min(2, "Institution name is required"),
  qualification: z.string().min(1, "Select your highest qualification"),
  fieldOfStudy: z.string().min(2, "Field of study is required"),
  graduationYear: z
    .string()
    .regex(/^\d{4}$/, "Enter a valid 4-digit year"),
});

export const guardianInformationSchema = z.object({
  guardianName: z.string().min(3, "Guardian's full name is required"),
  guardianPhone: z.string().min(11, "Guardian's phone number is required"),
  guardianRelationship: z.string().min(1, "Select a relationship"),
  guardianAddress: z.string().min(10, "Guardian's address is required"),
});

export const enrollmentSchema = personalInformationSchema
  .merge(educationInformationSchema)
  .merge(guardianInformationSchema);

export type PersonalInformationSchema = z.infer<typeof personalInformationSchema>;
export type EducationInformationSchema = z.infer<typeof educationInformationSchema>;
export type GuardianInformationSchema = z.infer<typeof guardianInformationSchema>;
export type EnrollmentSchema = z.infer<typeof enrollmentSchema>;

// Step order:
// 1 Personal | 2 Education | 3 Guardian | 4 Documents |
// 5 Course Summary | 6 Payment Summary | 7 Review | 8 Final Submission
//
// Only steps with actual form fields appear here — 4 through 8 are
// validated separately (documents by presence of uploaded URLs,
// 5/6/7 are read-only, 8 by the agreement checkbox).
export const stepFields: Record<number, (keyof EnrollmentSchema)[]> = {
  1: ["fullName", "email", "phone", "gender", "dateOfBirth", "state", "country", "address"],
  2: ["institution", "qualification", "fieldOfStudy", "graduationYear"],
  3: ["guardianName", "guardianPhone", "guardianRelationship", "guardianAddress"],
};

export const DOCUMENTS_STEP = 4;
export const FINAL_SUBMISSION_STEP = 8;
export const TOTAL_ENROLLMENT_STEPS = 8;
