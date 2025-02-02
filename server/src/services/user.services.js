const UserRepository = require("../Repository/user.repository");
const bcrypt = require("bcrypt");
const { JWT_SECRET_KEY } = require("../config/server_config");
const jwt = require("jsonwebtoken");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("Error in services to create user - " + error.message);
    }
  }

  async signIn(email, password) {
    try {
      const isAuthEmail = await this.userRepository.getByEmail(email);
      if (!isAuthEmail) {
        return new Error("Invalid Email Address");
      }
      const isMatch = await this.comparePassword(
        password,
        isAuthEmail.Password
      );
      if (!isMatch) {
        return new Error("Invalid Password");
      }
      const newToken = this.generateToken(isAuthEmail);
      return {
        user: isAuthEmail,
        token: newToken,
      };
    } catch (error) {}
  }

  comparePassword(plainTextPassword, encryptedPassword) {
    return bcrypt.compare(plainTextPassword, encryptedPassword);
  }

  generateToken(email) {
    return jwt.sign(
      {
        email,
        JWT_SECRET_KEY,
      },
      JWT_SECRET_KEY,
      { expiresIn: "10m" }
    );
  }
}
module.exports = UserService;
