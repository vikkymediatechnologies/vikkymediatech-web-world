"use client";

import { useState } from "react";
import { uploadDocument } from "@/lib/supabase/storage.service";

export interface UploadedDocuments {
  passportUrl: string | null;
  idDocumentUrl: string | null;
  cvUrl: string | null;
  certificateUrl: string | null;
}

export const EMPTY_DOCUMENTS: UploadedDocuments = {
  passportUrl: null,
  idDocumentUrl: null,
  cvUrl: null,
  certificateUrl: null,
};

interface Props {
  documents: UploadedDocuments;
  onChange: (docs: UploadedDocuments) => void;
  stepError?: string | null;
}

export default function DocumentUpload({ documents, onChange, stepError }: Props) {
  const [uploading, setUploading] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFile = async (
    field: keyof UploadedDocuments,
    folder: string,
    file: File | undefined
  ) => {
    if (!file) return;
    setUploading((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    try {
      const url = await uploadDocument(file, folder);
      onChange({ ...documents, [field]: url });
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        [field]: err instanceof Error ? err.message : "Upload failed. Try again.",
      }));
    } finally {
      setUploading((prev) => ({ ...prev, [field]: false }));
    }
  };

  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold mb-2">Upload Documents</h2>
      <p className="text-gray-600 mb-8">
        Passport photograph and a means of identification are required. CV
        and certificates are optional.
      </p>

      {stepError && (
        <p className="mb-6 rounded-xl bg-red-50 p-4 text-sm text-red-600">{stepError}</p>
      )}

      <div className="grid gap-8 md:grid-cols-2">
        <UploadField
          label="Passport Photograph"
          required
          accept="image/*"
          uploaded={documents.passportUrl}
          uploading={uploading.passportUrl}
          error={errors.passportUrl}
          onSelect={(file) => handleFile("passportUrl", "passports", file)}
        />

        <UploadField
          label="Means of Identification"
          required
          accept="image/*,application/pdf"
          uploaded={documents.idDocumentUrl}
          uploading={uploading.idDocumentUrl}
          error={errors.idDocumentUrl}
          onSelect={(file) => handleFile("idDocumentUrl", "identification", file)}
        />

        <UploadField
          label="CV (optional)"
          accept="application/pdf"
          uploaded={documents.cvUrl}
          uploading={uploading.cvUrl}
          error={errors.cvUrl}
          onSelect={(file) => handleFile("cvUrl", "cv", file)}
        />

        <UploadField
          label="Certificates (optional)"
          accept="image/*,application/pdf"
          uploaded={documents.certificateUrl}
          uploading={uploading.certificateUrl}
          error={errors.certificateUrl}
          onSelect={(file) => handleFile("certificateUrl", "certificates", file)}
        />
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  required?: boolean;
  accept: string;
  uploaded: string | null;
  uploading?: boolean;
  error?: string;
  onSelect: (file: File | undefined) => void;
}

function UploadField({
  label,
  required,
  accept,
  uploaded,
  uploading,
  error,
  onSelect,
}: FieldProps) {
  return (
    <div>
      <label className="font-medium">
        {label} {required && <span className="text-red-600">*</span>}
      </label>

      <input
        type="file"
        accept={accept}
        onChange={(e) => onSelect(e.target.files?.[0])}
        className="mt-2 w-full rounded-xl border p-3"
      />

      {uploading && <p className="mt-2 text-sm text-blue-600">Uploading...</p>}
      {uploaded && !uploading && (
        <p className="mt-2 text-sm text-green-600">✓ Uploaded</p>
      )}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
