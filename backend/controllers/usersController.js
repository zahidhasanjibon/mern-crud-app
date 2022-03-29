const User = require("../model/users");
function userController() {
  return {
    getAllUsers: async (req, res, next) => {
      let users;
      try {
        users = await User.find();
      } catch (error) {
        console.log(error);
      }
      if (!users) {
        return res.status(404).json({
          message: "user not found",
        });
      }

      return res.status(200).json({ users });
    },
    adduser: async (req, res, next) => {
      let user;
      const { name, age, number, gender, image } = req.body;

      if (!name || !age || !number || !gender || !image) {
        return res.status(500).json({ message: "unable to add user" });
      }
      try {
        user = new User({
          name,
          age,
          number,
          gender,
          image,
        });
        const userData = await user.save();
        return res.status(201).json({ userData: userData });
      } catch (error) {
        console.log(error);
      }
    },
    getById: async (req, res, next) => {
      const id = req.params.id;
      let user;
      try {
        user = await User.findById(id);
      } catch (error) {
        console.log(error);
      }
      if (!user) {
        return res.status(404).json({
          message: "not user found",
        });
      }
      return res.status(200).json({
        user: user,
      });
    },
    updateUser: async (req, res) => {
      const id = req.params.id;
      const { name, age, number, phone, gender, status, image } = req.body;
      let user;
      try {
        user = await User.findByIdAndUpdate(
          id,
          {
            name,
            age,
            number,
            phone,
            gender,
            status,
            image,
          },
          { new: true, useFindAndModify: false }
        );
      } catch (error) {
        console.log(error);
      }
      if (!user) {
        return res.status(404).json({
          message: "couldn't update user",
        });
      }
      return res.status(200).json({
        user,
      });
    },
    deleteUser: async (req, res) => {
      const id = req.params.id;
      let user;
      try {
        user = await User.findByIdAndRemove(id);
      } catch (error) {
        console.log(error);
      }
      if (!user) {
        return res.status(404).json({
          message: "unable to delete user",
        });
      }
      return res.status(200).json({
        user,
      });
    },
  };
}
module.exports = userController;
