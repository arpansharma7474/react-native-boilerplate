interface IHttpErrorType {
   message: string;
   statusCode: number;
}

class HttpError extends Error {
   statusCode = 0
   constructor({ message, statusCode }: IHttpErrorType) {
      super(message);
      this.statusCode = statusCode;
   }

   toJSON() {
      return {
         message: this.message,
         statusCode: this.statusCode,
      };
   }
}

export default HttpError;