export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  mothersName: string;
  mothersOccupation: string;
  motherContactNo: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export interface IStudent {
  id: string;
  name: string;
  email: string;
  gender: "Male" | "Female";
  dateOfBirth?: string;
  contactNumber: string;
  emergencyNumber: string;
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: "active" | "blocked";
}
