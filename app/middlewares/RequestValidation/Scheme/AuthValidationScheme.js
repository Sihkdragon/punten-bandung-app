const { validationResult } = require("express-validator");

const Login_Scheme = {
  username: {
    in: ["body"],
    isEmpty: {
      negated: true,
      errorMessage: "Username Field is Required",
    },
  },
  password: {
    in: ["body"],
    isEmpty: {
      negated: true,
      errorMessage: "Password Field Is Required",
    },
  },
};

const Register_Scheme = {
  email: {
    in: ["body"],
    isEmpty: {
      negated: true,
      errorMessage: "Email Field is Required",
    },
  },
  username: {
    in: ["body"],
    isEmpty: {
      negated: true,
      errorMessage: "Username Field is Required",
    },
  },
  name: {
    in: ["body"],
    isEmpty: {
      negated: true,
      errorMessage: "Name Field Is Required",
    },
  },
  password: {
    in: ["body"],
    isEmpty: {
      negated: true,
      errorMessage: "Password Field Is Required",
    },
  },
};

module.exports = {
  Login_Scheme,
  Register_Scheme,
};
