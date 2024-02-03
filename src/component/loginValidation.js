function Validation(values) {

  let error = {}
  //regular expression for checking email
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //regular expression for checking password

  const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/

  if (values.email === "") {
    error.email = "Name should not be empty";
  }
  else if (!email_pattern.test(values.email)) {
    error.email = "Email didn't match";
  }
  else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Name should not be empty";
  }
  else if (!password_pattern.test(values.password)) {
    error.password = "password didn't match";
  }
  else {
    error.password = "";
  }
  return error;

};

export default Validation;