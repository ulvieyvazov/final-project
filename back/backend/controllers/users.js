const Users = require('../models/loginRegister')

module.exports.getUsersData = async (req, res) => {
    try {
      const users = await Users.find();
      res.status(200).json(users);
      console.log("get users");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  module.exports.getUsersDataById = async (req, res) => {
    const { id } = req.params;
    try {
      const users = await Users.findById(id);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
  module.exports.deleteUserInfo = async (req, res) => {
    console.log("delete");
    const { id } = req.params;
    try {
      const deletedUser = await Users.findByIdAndDelete(id);
      res.status(200).json(deletedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports.updateUsersData = async (req, res) => {
    const { id } = req.params;
    try {
      const updatedData = await Users.findByIdAndUpdate(id, req.body);
      res.status(201).json(updatedData);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };