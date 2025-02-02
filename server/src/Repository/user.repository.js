const { Users } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      const user = await Users.create(data);
      return user;
    } catch (error) {
      console.log("Error in repository to create user: " + error);
    }
  }

  async getByEmail(email) {
    try {
      const user = await Users.findOne({
        where: {
          email: email,
        },
      });
      return user;
    } catch (error) {
      console.log("Error finding user by email - " + error.message);
    }
  }

  async getByRole(userRole) {
    try {
      const users = await Users.findAll({
        where: {
          Role: userRole,
        },
      });
      return users;
    } catch (error) {
      console.log("Error finding users by role - " + error.message);
    }
  }
}

module.exports = UserRepository;
