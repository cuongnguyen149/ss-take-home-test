const bcrypt = require('bcrypt');
const salt = 10;
const encrypt = (password: string) => {
  return bcrypt.hashSync(password, salt);
}

const passwordUtil = {
  encrypt
}

export default passwordUtil;