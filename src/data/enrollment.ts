export interface EnrollmentData {
  // Personal Information
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
  state: string;
  country: string;
  address: string;

  // Education
  highestQualification: string;
  occupation: string;
  experience: string;

  // Course
  courseSlug: string;
  duration: number;

  // Payment
  totalFee: number;
  deposit: number;
  balance: number;

  // Agreement
  acceptedTerms: boolean;
}