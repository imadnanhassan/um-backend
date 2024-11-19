// student schema

import { model, Schema } from "mongoose";
import { IStudent } from "./student.interface";

const studentSchema = new Schema<IStudent>({
  id: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true },
  gender: ["Male", "Female"],
  dateOfBirth: { type: String },
  contactNumber: { type: String, required: true },
  emergencyNumber: { type: String, required: true },
  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: {
    fatherName: {
      type: String,
      required: true,
    },
    fatherOccupation: {
      type: String,
      required: true,
    },
    fatherContactNo: {
      type: String,
      required: true,
    },
    mothersName: {
      type: String,
      required: true,
    },
    mothersOccupation: {
      type: String,
      required: true,
    },
    motherContactNo: {
      type: String,
      required: true,
    },
  },
  localGuardian: {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
  },
  profileImage: {
    type: String,
  },
  isActive: ["active", "blocked"],
});

export const StudentModel = model<IStudent>("Student", studentSchema);
