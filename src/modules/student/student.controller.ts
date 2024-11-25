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
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
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
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
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
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

const updateStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;
    const updateData = req.body;

    const updatedStudent = await StudentServices.updateStudentInDB(
      studentId,
      updateData
    );

    if (!updatedStudent) {
      return res
        .status(404)
        .json({ message: "Student not found or update failed" });
    }

    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
};
