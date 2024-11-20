import { IStudent } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudentToDB = async (student: IStudent) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSignleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentToDB,
  getAllStudentsFromDB,
  getSignleStudentFromDB,
};
