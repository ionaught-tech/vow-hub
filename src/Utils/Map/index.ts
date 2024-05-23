const getErrorDetails = (error:any) =>
  error.details.map(({ message, path }:any) => ({
    message: message,
    path: path.length < 2 ? path[0] : path,
  }));

export {
  getErrorDetails
};
