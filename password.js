const bcrypt = require("bcrypt");

(async () => {
  const encryptedPassword = await bcrypt.hash("1234", 10);
  console.log(encryptedPassword);
})();
