import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signup = async(req, res) =>{
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    
    if(password !== confirmPassword){
      return res.status(400).json({error:"Passwords don't match."});
    };
    
    const user = await User.findOne({username});
    if(user){
      return res.status(400).json({error:"User already exists."});
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const profilePic = `https://api.dicebear.com/10.x/lorelei/svg?seed=${username}`;

    const newUser = new User({
      fullName,
      username,
      password:hashedPassword,
      gender,
      profilePic,

    });
    if(newUser){
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    }else{
       res.status(400).json({error:"Invalid user data."});
    }

  } catch (error) {
    return res.status(500).json({error:"Error in login."});
  }
};

export const login = async(req, res) =>{
  try {
    const {username, password} = req.body;
    const user = await User.findOne({username});
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    ); 

    if(!user || !isPasswordCorrect){
      return res.status(400).json({error:"Invalid credintials."})
    }
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic
    });
  } catch (error) {
    return res.status(500).json({ 
      error: "Error in log in." });
    
  };
}
  export const logout = (req, res) =>{
   try{
    res.cookie("jwt",'', {maxAge:0});
    res.status(200).json({message:"Logged out successfully."});
  } catch (error) {
    return res.status(500).json({
       error: "Error in log out." });
  }
};
