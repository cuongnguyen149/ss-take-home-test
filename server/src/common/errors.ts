enum HTTP_STATUS_CODE {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  CONFLICT = 409,
}
enum ERROR_CODE {
  RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND',
  EMAIL_ALREADY_EXISTED = 'EMAIL_ALREADY_EXISTED'
}

const ErrorList: Record<
  ERROR_CODE,
  {
    statusCode: number;
    message: string;
  }
> = {
  [ERROR_CODE.RESOURCE_NOT_FOUND]: {
    statusCode: HTTP_STATUS_CODE.NOT_FOUND,
    message: 'Resource not found'
  },
  [ERROR_CODE.EMAIL_ALREADY_EXISTED]: {
    statusCode: HTTP_STATUS_CODE.CONFLICT,
    message: 'Email already existed'
  }
};


export { ERROR_CODE, ErrorList };
