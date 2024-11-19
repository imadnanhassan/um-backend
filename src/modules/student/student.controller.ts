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

export const StudentController = {
  createStudent,
};
