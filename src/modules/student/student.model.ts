import { model, Schema } from "mongoose";
import { Guardian, IStudent, LocalGuardian } from "./student.interface";

// Guardian Schema
const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required"],
    minlength: [2, "Father's name must be at least 2 characters long"],
    maxlength: [100, "Father's name cannot exceed 100 characters"],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
    minlength: [2, "Occupation must be at least 2 characters long"],
    maxlength: [50, "Occupation cannot exceed 50 characters"],
    trim: true,
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required"],
    match: [
      /^01\d{9}$/,
      "Father's contact number must be a valid BD number (11 digits starting with 01)",
    ],
  },
  mothersName: {
    type: String,
    required: [true, "Mother's name is required"],
    minlength: [2, "Mother's name must be at least 2 characters long"],
    maxlength: [100, "Mother's name cannot exceed 100 characters"],
    trim: true,
  },
  mothersOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
    minlength: [2, "Occupation must be at least 2 characters long"],
    maxlength: [50, "Occupation cannot exceed 50 characters"],
    trim: true,
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required"],
    match: [
      /^01\d{9}$/,
      "Mother's contact number must be a valid BD number (11 digits starting with 01)",
    ],
  },
});

// Local Guardian Schema
const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: [true, "Local guardian's name is required"],
    minlength: [2, "Local guardian's name must be at least 2 characters long"],
    maxlength: [100, "Local guardian's name cannot exceed 100 characters"],
    trim: true,
  },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required"],
    minlength: [2, "Occupation must be at least 2 characters long"],
    maxlength: [50, "Occupation cannot exceed 50 characters"],
    trim: true,
  },
  contactNo: {
    type: String,
    required: [true, "Local guardian's contact number is required"],
    match: [
      /^01\d{9}$/,
      "Local guardian's contact number must be a valid BD number (11 digits starting with 01)",
    ],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required"],
    minlength: [5, "Address must be at least 5 characters long"],
    maxlength: [300, "Address cannot exceed 300 characters"],
    trim: true,
  },
});

// Student Schema
const studentSchema = new Schema<IStudent>({
  id: {
    type: String,
    required: [true, "Student ID is required"],
    unique: true,
    match: [
      /^[a-zA-Z0-9_-]{6,30}$/,
      "ID must be alphanumeric and 6-30 characters long",
    ],
  },
  name: {
    type: String,
    required: [true, "Student name is required"],
    minlength: [2, "Name must be at least 2 characters long"],
    maxlength: [100, "Name cannot exceed 100 characters"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/\S+@\S+\.\S+/, "Please provide a valid email address"],
  },
  gender: {
    type: String,
    enum: {
      values: ["Male", "Female"],
      message: "{VALUE} is not a valid gender",
    },
    required: [true, "Gender is required"],
  },
  dateOfBirth: {
    type: String,
    match: [
      /^\d{4}-\d{2}-\d{2}$/,
      "Date of birth must be in the format YYYY-MM-DD",
    ],
  },
  contactNumber: {
    type: String,
    required: [true, "Contact number is required"],
    match: [
      /^01\d{9}$/,
      "Contact number must be a valid BD number (11 digits starting with 01)",
    ],
  },
  emergencyNumber: {
    type: String,
    required: [true, "Emergency number is required"],
    match: [
      /^01\d{9}$/,
      "Emergency number must be a valid BD number (11 digits starting with 01)",
    ],
  },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    required: [true, "Blood group is required"],
  },
  presentAddress: {
    type: String,
    required: [true, "Present address is required"],
    minlength: [5, "Address must be at least 5 characters long"],
    maxlength: [300, "Address cannot exceed 300 characters"],
    trim: true,
  },
  permanentAddress: {
    type: String,
    required: [true, "Permanent address is required"],
    minlength: [5, "Address must be at least 5 characters long"],
    maxlength: [300, "Address cannot exceed 300 characters"],
    trim: true,
  },
  guardian: {
    type: guardianSchema,
    required: [true, "Guardian information is required"],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, "Local guardian information is required"],
  },
  profileImage: {
    type: String,
    match: [
      /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/,
      "Profile image must be a valid URL ending in an image format",
    ],
  },
  isActive: {
    type: String,
    enum: ["active", "blocked"],
    default: "active",
  },
});

export const StudentModel = model<IStudent>("Student", studentSchema);
