import { HttpStatus, HttpException } from '@nestjs/common';
import { ErrorCode } from '../../constants/error';

class CustomHTTPExceptionData {
    errorCode?: number;
    message?: string;
}

export class CustomHTTPException extends HttpException {
  constructor(expData: CustomHTTPExceptionData) {
    if (typeof expData.errorCode === 'undefined') {
      expData.errorCode = ErrorCode.ParamsError.CODE;
    }
    super(expData, HttpStatus.OK);
  }
}