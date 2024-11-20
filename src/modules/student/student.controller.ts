import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;

    // will call service function to send data
    const result = await StudentServices.createStudentToDB(student);

    // send response
    res.status(200).json({
      success: true,
      message: "Student is created succesfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    // send response
    res.status(200).json({
      success: true,
      message: "Students retrieved succesfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSignleStudentFromDB(studentId);

    // send reponse
    res.status(200).json({
      success: true,
      message: "Student retrieved succesfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
