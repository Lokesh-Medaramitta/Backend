const userService = require('./userService');

const getDataConntrollerfn = async (req, res) => {
  try {
    const empolyee = await userService.getDataFromDBService();
    res.json({ status: true, data: empolyee });
  } catch (error) {
    res.status(500).json({ status: false, message: "Error fetching data" });
  }
}

const createUserControllerFn = async (req, res) => {
  try {
    const status = await userService.createUserDBService(req.body);
    if (status) {
      res.json({ status: true, message: "User created successfully" });
    } else {
      res.status(400).json({ status: false, message: "Error creating user" });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: "Error creating user" });
  }
}

module.exports = { getDataConntrollerfn, createUserControllerFn };

