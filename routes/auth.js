const router = require("express").Router();
const User = require("../model/User");
const {registerValidation} = require('./validation');
const {loginValidation} = require('./validation');




router.post("/register",  async (req, res) => {
  const {error} = registerValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);


  // Check if the user is already in the database
  const emailexist = await User.findOne({email:req.body.email});
  if(emailexist) return res.status(400).send("Email already Exist");

  const user = new User({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
  });

  try{
    const savedUser = await user.save();
    res.send(savedUser);
  }catch(err){
    res.status(400).send(err);
  }

});

module.exports = router;
