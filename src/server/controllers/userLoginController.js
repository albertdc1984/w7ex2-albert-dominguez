const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../database/models/User");

const userLogin = async (req, res, next) => {
  const { userName, password } = req.body;
  const user = await User.findOne({ userName });

  if (!user) {
    const error = new Error("User not found");
    error.code = 401;
    return next(error);
  }
  const rightPassword = bcrypt.compare(password, user.password);
  if (!rightPassword) {
    const error = new Error("Wrong password");
    error.code = 401;
  }

  // eslint-disable-next-line no-underscore-dangle
  const userData = { name: user.name, id: user._id };
  const token = jwt.sign(userData, process.env.JWT_SECRET, {
    expireSiN: "10H",
  });
  return res.json({ token });
};

module.exports = userLogin;
