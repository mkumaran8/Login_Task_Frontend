function Validation(values) {

  let error = {}
  //regular expression for checking email
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //regular expression for checking password
  const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/

  if (values.name === "") {
    error.name = "Name should not be empty";
  }
  else {
    error.name = "";
  }


  if (values.email === "") {
    error.email = "Email should not be empty";
  }
  else if (!email_pattern.test(values.email)) {
    error.email = "Email didn't match";
  }
  else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password should not be empty";
  }
  else if (!password_pattern.test(values.password)) {
    error.password = "Password didn't match";
  }
  else {
    error.password = "";
  }
  return error;

};

export default Validation;