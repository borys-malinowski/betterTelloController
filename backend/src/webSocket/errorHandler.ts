const errorHandler = (error: Error | null): void => {
  if (error) {
    console.error("ERROR");
    console.error(error);
  }
};
export default errorHandler;
