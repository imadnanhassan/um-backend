export const constants = {
  MESSAGES: {
    // General
    SUCCESS: 'Operation completed successfully',
    NOT_AUTHORIZED: 'You are not authorized to perform this action',
    RESOURCE_NOT_FOUND: 'Requested resource not found',
    VALIDATION_ERROR: 'Validation error occurred',

    // User-related
    USER_NOT_FOUND: 'User not found',
    USER_ALREADY_EXISTS: 'User already exists',
    INVALID_CREDENTIALS: 'Invalid credentials provided',
    PASSWORD_CHANGED: 'Password has been changed successfully',
    ACCOUNT_DISABLED: 'This account is disabled',

    // Student-related
    STUDENT_NOT_FOUND: 'Student not found',
    STUDENT_ADDED: 'Student added successfully',
    STUDENT_UPDATED: 'Student updated successfully',
    STUDENT_DELETED: 'Student deleted successfully',

    // Faculty-related
    FACULTY_NOT_FOUND: 'Faculty not found',
    FACULTY_ADDED: 'Faculty added successfully',
    FACULTY_UPDATED: 'Faculty updated successfully',
    FACULTY_DELETED: 'Faculty deleted successfully',

    // Course-related
    COURSE_NOT_FOUND: 'Course not found',
    COURSE_ADDED: 'Course added successfully',
    COURSE_UPDATED: 'Course updated successfully',
    COURSE_DELETED: 'Course deleted successfully',

    // Enrollment-related
    ENROLLMENT_NOT_FOUND: 'Enrollment not found',
    ENROLLMENT_SUCCESS: 'Student enrolled successfully',
    ENROLLMENT_UPDATED: 'Enrollment updated successfully',
    ENROLLMENT_DELETED: 'Enrollment deleted successfully',

    // Examination-related
    EXAM_NOT_FOUND: 'Exam not found',
    EXAM_ADDED: 'Exam added successfully',
    EXAM_UPDATED: 'Exam updated successfully',
    EXAM_DELETED: 'Exam deleted successfully',

    // Result-related
    RESULT_NOT_FOUND: 'Result not found',
    RESULT_ADDED: 'Result added successfully',
    RESULT_UPDATED: 'Result updated successfully',
    RESULT_DELETED: 'Result deleted successfully',

    // Timetable-related
    TIMETABLE_NOT_FOUND: 'Timetable not found',
    TIMETABLE_CREATED: 'Timetable created successfully',
    TIMETABLE_UPDATED: 'Timetable updated successfully',
    TIMETABLE_DELETED: 'Timetable deleted successfully',
  },

  HTTP_STATUS: {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
  },
};
