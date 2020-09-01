class CodeAndMsg {
  CODE: number;
  MESSAGE: string;
}

export class ErrorCode {
  static readonly SUCCESS: CodeAndMsg = { CODE: 0, MESSAGE: 'success' };
  static readonly ERROR: CodeAndMsg = { CODE: 1, MESSAGE: 'fail' };
  static readonly ParamsError: CodeAndMsg = { CODE: 2, MESSAGE: '参数错误' };

  static CodeToMessage(code: number): string {
    for (const key of Object.keys(this)) {
      if (this[key].CODE === code) {
        return this[key].MESSAGE;
      }
    }
    return '';
  }

  static HasCode(code: number): boolean {
    for (const key of Object.keys(this)) {
      if (this[key].CODE === code) {
        return true;
      }
    }
    return false;
  }
}