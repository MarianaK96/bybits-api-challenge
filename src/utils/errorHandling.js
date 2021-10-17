export const determineMessage = (errorStatus) => {
  console.log("errorStatus : ", errorStatus);
  if (errorStatus === 401)
    return "There was an unexpected error, please try again";
  if (errorStatus === 405)
    return `Please ensure your inputs contain no symbols`;
  if (errorStatus === 422)
    return `There was an error in your request configuration, please contact an administrator`;
};
