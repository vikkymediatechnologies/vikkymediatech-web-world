"use client";

import { EnrollmentSchema } from "@/lib/validation/enrollment";
import { UploadedDocuments } from "./DocumentUpload";

interface Props {
  data: EnrollmentSchema;
  documents: UploadedDocuments;
  courseTitle: string;
  durationMonths: number;
  courseFee: number;
  depositAmount: number;
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b py-3 text-sm">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-right">{value}</span>
    </div>
  );
}

export default function ReviewInformation({
  data,
  documents,
  courseTitle,
  durationMonths,
  courseFee,
  depositAmount,
}: Props) {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold mb-8">Review Your Application</h2>

      <div className="space-y-8">
        <div>
          <h3 className="font-semibold text-lg mb-2">Course</h3>
          <Row label="Course" value={courseTitle} />
          <Row label="Duration" value={`${durationMonths} Months`} />
          <Row
            label="Initial Payment (70%)"
            value={`₦${depositAmount.toLocaleString()} of ₦${courseFee.toLocaleString()}`}
          />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
          <Row label="Full Name" value={data.fullName} />
          <Row label="Email" value={data.email} />
          <Row label="Phone" value={data.phone} />
          <Row label="Gender" value={data.gender} />
          <Row label="Date of Birth" value={data.dateOfBirth} />
          <Row label="State / Country" value={`${data.state}, ${data.country}`} />
          <Row label="Address" value={data.address} />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Education</h3>
          <Row label="Institution" value={data.institution} />
          <Row label="Qualification" value={data.qualification} />
          <Row label="Field of Study" value={data.fieldOfStudy} />
          <Row label="Graduation Year" value={data.graduationYear} />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Guardian / Emergency Contact</h3>
          <Row label="Name" value={data.guardianName} />
          <Row label="Phone" value={data.guardianPhone} />
          <Row label="Relationship" value={data.guardianRelationship} />
          <Row label="Address" value={data.guardianAddress} />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Documents</h3>
          <Row label="Passport Photograph" value={documents.passportUrl ? "✓ Uploaded" : "Missing"} />
          <Row label="Means of Identification" value={documents.idDocumentUrl ? "✓ Uploaded" : "Missing"} />
          <Row label="CV" value={documents.cvUrl ? "✓ Uploaded" : "Not provided"} />
          <Row label="Certificates" value={documents.certificateUrl ? "✓ Uploaded" : "Not provided"} />
        </div>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Please confirm the details above are correct, then continue to the
        final step to submit.
      </p>
    </section>
  );
}
