const User = require("../../models/User");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const hashed_password = bcrypt.hashSync(password, 10); // Hash user password

  try {
    // Create new user entry in the database
    const new_user = await User.create({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: hashed_password,
    });

    res.status(201).json({
        status: 201,
        message: "User created successfully",
        data: {
            id: new_user.id,
            createdAt: new_user.createdAt,
            first_name: new_user.first_name,
            last_name: new_user.last_name,
            email: new_user.email,
                }
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error creating user",
	  error: error,
    });
  }
};

module.exports = createUser;