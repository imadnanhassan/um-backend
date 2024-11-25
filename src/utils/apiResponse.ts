export const apiResponse = {
  success: (data: unknown, message = 'Success') => ({
    message,
    success: true,
    data,
  }),

  error: (error: unknown, message = 'An error occurred') => {
    if (error instanceof Error) {
      if (error.name === 'ValidationError') {
        return {
          message: 'Validation failed',
          success: false,
          error: error.message,
        };
      }
      if (error.name === 'MongoError' && 'code' in error) {
        return {
          message: 'Database error occurred',
          success: false,
          error: error.message,
        };
      }
    }

    return {
      message,
      success: false,
      error: typeof error === 'string' ? error : JSON.stringify(error),
    };
  },

  notFound: (message = 'Resource not found') => ({
    message,
    success: false,
    error: 'NOT_FOUND',
  }),

  validationError: (errors: unknown, message = 'Validation error') => ({
    message,
    success: false,
    errors,
  }),
};
