import { supabase } from "./client";
import { EnrollmentSchema } from "@/lib/validation/enrollment";
import { UploadedDocuments } from "@/components/enrollment/DocumentUpload";

export interface SaveEnrollmentInput extends EnrollmentSchema, UploadedDocuments {
  courseId: string;
  durationMonths: number;
  courseFee: number;
  depositAmount: number;
  balanceAmount: number;
}

export async function saveEnrollment(input: SaveEnrollmentInput): Promise<void> {
  // Deliberately no .select() here — the anon key only has INSERT
  // permission on this table (see enrollments_schema.sql), so
  // reading the row back in the same call would fail under RLS.
  const { error } = await supabase.from("enrollments").insert({
    course_id: input.courseId,
    duration_months: input.durationMonths,

    full_name: input.fullName,
    email: input.email,
    phone: input.phone,
    gender: input.gender,
    date_of_birth: input.dateOfBirth,
    state: input.state,
    country: input.country,
    address: input.address,

    institution: input.institution,
    qualification: input.qualification,
    field_of_study: input.fieldOfStudy,
    graduation_year: input.graduationYear,

    guardian_name: input.guardianName,
    guardian_phone: input.guardianPhone,
    guardian_relationship: input.guardianRelationship,
    guardian_address: input.guardianAddress,

    passport_url: input.passportUrl,
    id_document_url: input.idDocumentUrl,
    cv_url: input.cvUrl,
    certificate_url: input.certificateUrl,

    course_fee: input.courseFee,
    deposit_amount: input.depositAmount,
    balance_amount: input.balanceAmount,
  });

  if (error) throw error;
}
